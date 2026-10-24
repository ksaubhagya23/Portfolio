# Saubhagya Kumar — Portfolio

A premium, responsive personal portfolio for Saubhagya Kumar, a B.Tech Computer Science and Information Technology student at GL Bajaj Institute of Technology and Management.

## Features

- Responsive dark developer portfolio
- Sticky navigation with smooth scrolling and mobile menu
- Animated role switcher and back-to-top control
- Personal profile, career roadmap, skills, projects, coding profiles, interests, and contact sections
- Centralized editable portfolio data
- Real project links and direct contact links
- Accessible semantic HTML and reduced-motion support

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS utilities
- Lucide React icons

## Folder structure

```text
src/
  data/portfolio.ts  # Personal details, skills, projects, and profile links
  App.tsx            # Portfolio sections and reusable UI pieces
  index.css          # Visual system, responsive layout, and animations
  main.tsx           # Application entry point
public/images/       # Profile and project image assets
```

## Run locally

Install Node.js, open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

The development server will show the site in your browser.

## Update your details

Edit `src/data/portfolio.ts` to change your name, contact details, social links, skills, coding profile URLs, and projects. The source-code repository URL is intentionally blank until the portfolio is published.

## Replace images

Add a new image inside `public/images/`, then update the `photo` value in `src/data/portfolio.ts`. Project artwork is currently lightweight CSS artwork so the site stays fast; project thumbnails can be added to each project entry later.

## Add project repositories

Add a `repository` value to a project entry and render a second source-code link in `ProjectCard` when the value is present. This keeps projects without public repositories free from placeholder buttons.

## Publish to GitHub

1. Create a new public repository named `saubhagya-portfolio` on GitHub.
2. Initialize this local folder as a Git repository.
3. Add the GitHub repository as the remote.
4. Commit the files and push the default branch.
5. Add the new repository URL to `portfolioRepository` in `src/data/portfolio.ts`.

## Deploy

Import the GitHub repository into Vercel, keep the default Vite build settings, and deploy. The site is a static frontend and does not require a database or server configuration.
