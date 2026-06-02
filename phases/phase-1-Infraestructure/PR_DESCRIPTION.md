## Change Type
*Please mark with an `x` the option that applies.*
- [x] ⚙️ Configuration, Docker or dependency changes

---

## Which service(s) does it affect?
- [x] `frontend` (React SPA)
- [x] `infrastructure` (Docker/PostgreSQL/pgvector)

---

## Description
This PR completes the initialization of **Phase 1: Infrastructure**. 
- Initialized React (Vite + TS) and NestJS applications.
- Configured Prisma v6 and generated the client.
- Restored Dockerfiles and updated docker-compose.
- Set up NPM Workspaces.

---

## How was this tested?
- [ ] Unit tests
- [ ] Integration tests
- [x] Docker Compose verification
