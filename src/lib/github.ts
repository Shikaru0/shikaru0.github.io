import { site } from "../config";

export interface GitHubRepository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    archived: boolean;
    fork: boolean;
    private: boolean;
    topics: string[];
    pushed_at: string;
    updated_at: string;
}

const API_URL = "https://api.github.com";
const USERNAME = site.username;

export async function getGitHubRepositories(): Promise<GitHubRepository[]> {
    const response = await fetch(
        `${API_URL}/users/${USERNAME}/repos?per_page=100`,
        {
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2026-03-10",
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `${response.status} ${response.statusText}`,
        );
    }

    const repositories =
        (await response.json()) as GitHubRepository[];

    return repositories
        .filter((repository) => {
            return (
                !repository.private
            );
        })
        .sort((a, b) => {
            return (
                new Date(b.pushed_at).getTime() -
                new Date(a.pushed_at).getTime()
            );
        });
}

export async function getGithubReadme(repository: GitHubRepository): Promise<string | null> {
    
	const response = await fetch(
		`https://raw.githubusercontent.com/${repository.full_name}/main/README.md`,
	);

	if (!response.ok) {
		return null;
	}

	return response.text();
}