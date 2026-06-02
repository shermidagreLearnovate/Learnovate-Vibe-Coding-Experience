## Change Type
*Please mark with an `x` the option that applies.*
- [x] ✨ New feature
- [ ] ⚙️ Configuration, Docker or dependency changes

---

## Which service(s) does it affect?
- [x] `frontend` (React SPA)
- [ ] `infrastructure` (Docker/PostgreSQL/pgvector)

---

## Description
This PR implements **Task 2.3: Type Definitions & Mock Data**. 
- Established global TypeScript interfaces aligned with the backend **Prisma schema**.
- Created a centralized `mockData` store to populate the UI.
- Refactored `KanbanBoard` and `TaskCard` to use these standardized types.
- Populated the dashboard with realistic project task data.

---

## How was this tested?
- [x] Verified type safety and compilation in the frontend.
- [x] Visual verification of the Kanban board with the new mock data.
