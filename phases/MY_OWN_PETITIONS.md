# 📂 Custom Tasks & Plan Deviations: Justification Report

This document explains the reasoning behind the creation of custom tasks that were not part of the original project phases. These "Self-Petitions" were necessary to bridge the gap between a visual prototype and a production-ready, functional application.

---

## 🛠️ Phase 3: Backend API
### [Task 3.4: Infrastructure Hardening & Container Fixes](./phase-3-Backend-API/my-own-petitions/task-3.4-infrastructure-hardening/Readme.md)
**Why the deviation?**
While the original phase focused on API logic, the project hit a "deployment wall." The backend would not start in containerized environments (Podman/Docker) due to complex issues with `npm workspaces`, TypeScript emission, and Prisma initialization.
**Impact:** Without this task, the project was un-runnable for anyone using the provided Docker setup. It transformed a "logic-only" phase into a "delivery-ready" infrastructure.

---

## 🛠️ Phase 4: Refactoring
### [Task 4.3: Full Functional Integration](./phase-4-Refactoring/my-own-petitions/task-4.3/Readme.md)
**Why the deviation?**
At this point, the application was a "visual shell." Buttons existed but did nothing; navigation was just a change of CSS classes, and there was no way to create data.
**Impact:** This task implemented the "Soul" of the Task Manager. It enabled real CRUD (Create via Modal) and functional navigation, turning a UI demo into a working tool.

### [Task 4.4: Professional Routing Integration](./phase-4-Refactoring/my-own-petitions/task-4.4/Readme.md)
**Why the deviation?**
The initial navigation used manual React state, which is not scalable and breaks standard browser behavior (Back/Forward buttons, deep linking).
**Impact:** Integrated `react-router-dom` to follow industry standards. This decoupled the layout from the page logic and prepared the app for future expansion (e.g., individual task pages, settings routes).

---

## 📝 Conclusion
These deviations represent a **"Shift from Prototype to Product."** By identifying these gaps (Infrastructure, Functionality, and Architecture), we ensured that the final result of Phase 4 is a solid, extensible foundation rather than just a collection of styled components.
