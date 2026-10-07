# template-site
Personal GitHub Pages site template built with Astro + TypeScript. Your repositories, profile README, and links are fetched at build time using the GitHub API.

Making it yours: clone the repo, edit `src/config.ts`, push. That's the whole setup.

## Why this?
- Automatically displays your github repositories and profile README.
- Keeps your site content synced with your github profile at build time.
- Requires minimal configuration and no backend or database.
- Deploys easily to github pages.

## Configuring
In `src/config.ts` you can configure everything needed to make it tailored to you.
You can:
- Set your username to make it fetch your github projects + readme on build.
- Set your socials to display.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Github Pages
GitHub Pages is a static website hosting service provided by GitHub.
The project contains an `astro.yml` workflow file, which builds and deploys the site to GitHub Pages.
> The site will only deploy if it is a public repository unless you have a Github Enterprise account

Every push, it will automatically rebuild and redeploy, but a scheduled rebuild is also possible.
With the current Github Pages Usage Limit, there is a _soft_ limit of 10 builds per hour.
This template-site has a default hourly rebuild:

```
  schedule:
    - cron: "0 * * * *"
```

> Please note that when deploying sites on GitHub Pages, it must follow their 
[ToS](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)

### Usage Limit
GitHub Pages sites are to the usage limits stated in their 
[docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits). 
