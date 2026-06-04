# 🏗️ Phase 3: Backend API Development - Summary Report

## 📌 Overview
This phase focused on transforming the static application into a dynamic system. We established a robust **NestJS** backend, integrated **Prisma** as our ORM, and bridged the "Connection Gap" between the frontend and the real database.

---

## 🛠️ About Gemini (The Collaboration Experience)
Working on the backend required a higher degree of precision and adherence to framework standards.

*   **Workflow Integration:** We transitioned from simple file creation to a structured "Research -> Strategy -> Execution" flow. This ensured that features like the Task Resource were generated using CLI tools (`nest g res`), maintaining "Framework Fidelity."
*   **Adaptability:** Gemini had to pivot from local mock data to real network communication, identifying and solving CORS issues to allow the React frontend to fetch live data.
*   **Infrastructure Troubleshooting:** During the final stages, we encountered significant containerization challenges (Podman/Docker). This required a deep dive into `npm workspaces` hoisting and TypeScript's emission behavior within Docker layers.

---

## 💻 About Code (Technical Implementation)

### 🔹 Core Architecture
*   **Prisma Layer:** Established a global `PrismaModule` and `PrismaService`, providing a centralized connection pool for all resources.
*   **Tasks Resource:** Implemented a full REST API for tasks, including CRUD operations, DTOs for data validation, and a specific business rule:
    *   *Business Logic:* High-priority tasks automatically receive an `[URGENT]` prefix and trigger a notification log.
*   **Error Handling:** Integrated `NotFoundException` to provide standardized REST error responses when resources are missing.

### 🔹 Connectivity (The Connection Gap)
*   **CORS:** Enabled Cross-Origin Resource Sharing on the backend.
*   **Dynamic Data:** The frontend `KanbanBoard` was refactored to use `useEffect` and `fetch`, replacing static mocks with live API data.

---

## 🔧 Infrastructure Fixes & Docker Hardening
Following the initial deployment, several critical containerization issues were identified and resolved to ensure production readiness:

### ⚠️ Challenges Encountered:
1.  **Missing JS in Dist:** The Docker image was missing `.js` files due to local `dist` pollution and incremental build settings.
2.  **Hoisted Dependencies:** Modules like `dotenv` were missing because they were hoisted to the monorepo root, which wasn't being copied correctly.
3.  **Prisma Initialization:** The Prisma client was not being re-generated in the final production stage.

### ✅ Resolutions:
*   **Clean Builds:** Added a `.dockerignore` to exclude local `dist` and `node_modules`.
*   **Workspace-Aware Dockerfile:** Refactored the `Dockerfile` to use `--workspace=backend` during dependency installation, ensuring all hoisted modules are captured.
*   **Final Generation:** Added `npx prisma generate` to the final Docker stage.
*   **Qualified Images:** Updated `docker-compose.yml` with `docker.io/` prefixes to prevent registry qualification errors in Podman.

---

## 📊 Key Takeaways for Miro Board
1.  **Full-Stack Sync:** The application is now "alive" with a real database.
2.  **Logic-Ready:** We proved we can inject business rules into the data flow.
3.  **Container Resilience:** The infrastructure is now hardened against common monorepo deployment pitfalls.

---

> **Status:** ✅ Phase 3 Completed  
> **Next Focus:** Refactoring UI/UX & Advanced Frontend Features.
