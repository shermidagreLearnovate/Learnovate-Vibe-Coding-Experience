## Type of Change

- [x] ⚙️ Configuration, Docker, or dependency change

---

## Services Affected

- [x] `frontend` (React SPA)
- [x] `infrastructure` (Docker/PostgreSQL/pgvector)

---

## Description

This PR completes the initialization of **Phase 1: Infrastructure**. Although previous logs indicated it was finished, the codebase was not present. The following actions have been performed:

1.  **Frontend:** Initialized React application using Vite and TypeScript.
2.  **Backend:** Initialized NestJS application.
3.  **Database:** Configured Prisma v6 and generated the client.
4.  **Docker:** Restored Dockerfiles and updated docker-compose to orchestrate the new services.
5.  **Monorepo:** Set up NPM Workspaces and root scripts to streamline development.

---

## How was this tested?

- [x] Docker Compose verification
- [ ] Pruebas unitarias
- [ ] Pruebas de integración
Verified that folder structures are correct and the Prisma client generates without errors.
