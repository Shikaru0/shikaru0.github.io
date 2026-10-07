import { site } from "../config";

export interface ModrinthProject {
    id: string;
    slug: string;
    title: string;
    icon_url: string | null;
    description: string | null;
    categories: string[];
    followers: number;
    downloads: number;
    date_created: string;
    date_modified: string;
}

const API_URL = "https://api.modrinth.com";
const USERNAME = site.modrinth_username;

export async function getModrinthProjects(): Promise<ModrinthProject[]> {
    const response = await fetch(
        `${API_URL}/v2/user/${USERNAME}/projects`,
    );

    if (!response.ok) {
        throw new Error(
            `${response.status} ${response.statusText}`,
        );
    }

    const projects =
        (await response.json()) as ModrinthProject[];

    return projects
        .sort((a, b) => {
            return (
                new Date(b.date_modified).getTime() -
                new Date(a.date_modified).getTime()
            );
        });
}
