## Type of Change

- [ ] ✨ New feature
- [ ] 🐞 Bug fix
- [ ] 📚 Documentation change
- [ ] 💅 Code improvement or refactor
- [ ] 🧪 Add or improve tests
- [x] ⚙️ Configuration, Docker, or dependency change

---

## Services Affected

- [x] `frontend` (React SPA)
- [ ] `api-gateway` (Spring Cloud)
- [ ] `user-service` (User management)
- [ ] `course-service` (Courses and RAG)
- [ ] `ai-service` (LLMs/Gemini/Ollama)
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

- [ ] Unit tests
- [ ] Integration tests
- [x] Docker Compose verification
- [ ] pgvector / RAG validation

Verified that folder structures are correct and the Prisma client generates without errors.
