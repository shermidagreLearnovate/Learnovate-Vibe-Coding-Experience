## Change Type
*Please mark with an `x` the option that applies.*
- [x] ✨ New feature
- [x] 🐛 Bug fix
- [x] ⚙️ Configuration, Docker or dependency changes

---

## Which service(s) does it affect?
- [x] `frontend` (React SPA)
- [x] `backend` (NestJS API)
- [x] `infrastructure` (Docker/PostgreSQL/Prisma)

---

## Description
This PR completes **Phase 3: Backend API Development** and includes critical infrastructure fixes for containerized environments.

### Key Deliverables:
1.  **NestJS Resource Generation:** Implemented a full CRUD API for `Tasks` using the Nest CLI and Prisma.
2.  **Business Logic:** Integrated high-priority task rules (URGENT prefixing and notification logging).
3.  **Frontend-Backend Integration:** Enabled CORS and refactored the React Kanban board to fetch live data from the API.
4.  **Infrastructure Hardening:**
    *   Fixed `Dockerfile` to handle `npm workspaces` and hoisted dependencies.
    *   Resolved `MODULE_NOT_FOUND` issues by excluding local `dist` folders via `.dockerignore`.
    *   Corrected Prisma client initialization in the production image.
    *   Standardized `docker-compose.yml` with qualified image names (`docker.io/`).

---

## How was this tested?
- [x] Manual verification of Kanban board with real API data.
- [x] Docker Compose full stack restart and health checks.
- [x] Prisma `db push` and data persistence verification.
- [ ] Unit tests (Service logic verified via logs).
