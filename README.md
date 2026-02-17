# Personal Developer Platform – Backend-Focused Portfolio
A developer portfolio platform designed to showcase backend and systems programming skills while remaining demoable via a web interface. Originally built as a static portfolio site, it is being refactored into a backend-driven system where the frontend consumes data through an API.

This project emphasizes real backend architecture, data modeling, client/server separation, and deployment on Linux, complementing my other backend projects while offering a location in which to demo my other projects.

## Tech Stack
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Vercel deployment
- (planned) Backend: Java, Spring Boot, AWS EC2
- (planned) Database: MySQL 
- Other: Git, Zod (runtime validation), 

## Features
#### Frontend (Largely Implemented)
- Modular Next.js frontend with reusable components: Navbar, ProjectCard, VideoEmbed, ThemeToggle
- Type-safe data models using TypeScript interfaces and Zod schemas
- Static project data currently served from projects.json
- Dynamic routing for project detail pages
- Responsive design with dark/light theme toggle
- Basic accessibility and SEO in place
#### Backend (Planned)
- Refactor frontend to fetch project data from backend API instead of static JSON
- GET /projects endpoint serving ProjectDTO data (Planned)
- Database persistence with MySQL/Postgres replacing static JSON (Planned)
- Optional backend maturity features:
- Admin-only authentication (Planned)
- Role-based access control (Planned)
- Content management without redeploy (Planned)

## Getting Started
#### Prerequisites:
- Node.js LTS (>=20) and package manager (pnpm recommended)
- GitHub account for repo hosting
- Vercel account for frontend deployment
- VS Code (recommended) with TypeScript support and extensions: ESLint, Prettier, Tailwind CSS IntelliSense
#### Install and Run
1. Clone the Repo
   ```git clone https://github.com/c-ruby/portfolio-site```
2. Install dependancies
   ```
     pnpm install
     pnpm dev
   ```
3. Deploy development server
  ```
    pnpm dev
  ```
  - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

* Currently will only bring up the static site. Backend API endpoints will replace static JSON once implemented, and further steps for setting up API will be added when available



Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
