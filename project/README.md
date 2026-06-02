# Task Management System - Monorepo

This is a full-stack task management application built with a modern TypeScript ecosystem.

## Project Structure

- **`/frontend`**: React application built with Vite, TypeScript, and Tailwind CSS.
- **`/backend`**: NestJS application providing a RESTful API with Prisma ORM and PostgreSQL.
- **`/infra`**: (Planned) Docker configuration and deployment manifests.

## Technical Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Vite, Tailwind CSS, TanStack Query |
| **Backend** | NestJS, TypeScript, Prisma |
| **Database** | PostgreSQL |
| **DevOps** | Docker, Docker Compose |

## Getting Started

1. **Install Dependencies:** `npm run install:all` from the root of the `project` folder.
2. **Infrastructure:** `docker-compose up -d`
3. **Backend:** `npm run backend:dev`
4. **Frontend:** `npm run frontend:dev`
