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

## Getting Started (Planned)

1. **Infrastructure:** `docker-compose up -d`
2. **Backend:** `cd backend && npm install && npm run start:dev`
3. **Frontend:** `cd frontend && npm install && npm run dev`
