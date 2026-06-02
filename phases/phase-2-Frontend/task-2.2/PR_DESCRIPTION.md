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
This PR implements **Task 2.2: Kanban Board Component**. 
- Created a modular `TaskCard` component to handle task visualization.
- Implemented a `KanbanBoard` component with three default columns (To Do, In Progress, Done).
- Added TypeScript types for Tasks and Priorities.
- Integrated the board into the main dashboard view with enhanced project controls (filter, sort, view toggle).

---

## How was this tested?
- [x] Visual verification of the Kanban layout and responsiveness.
- [ ] Unit tests
- [ ] Integration tests
- [ ] Docker Compose verification
