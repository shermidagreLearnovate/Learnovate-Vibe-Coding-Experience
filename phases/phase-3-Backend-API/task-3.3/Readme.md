# Task 3.3: Frontend-Backend Integration (API Connection)

**Goal:** Replace frontend mock data with real API calls to the NestJS backend and handle CORS.

## Execution Log

### Console Prompt (User Directive)
"procede a empezar con la tarea 3.3 @phases\phase-3-Backend-API\task-3.3\**"

### Sample Prompt (Task Instruction)
"In the React app, replace the mock data with a real API call to the NestJS backend to fetch and display the tasks on the Kanban board. Handle CORS if necessary."

### Implementation Details
1.  **Backend Adjustment (CORS):**
    *   Modified `project/backend/src/main.ts` to call `app.enableCors()`.
    *   This allows the frontend (running on `localhost:5173`) to securely communicate with the API (on `localhost:3000`).
2.  **Frontend Refactoring:**
    *   Updated `KanbanBoard.tsx` to use React hooks (`useState`, `useEffect`) for data management.
    *   Replaced the static `mockTasks` import with an asynchronous `fetch` call to the `/tasks` endpoint.
    *   Implemented a professional **Loading State** using a `Loader2` spinner from Lucide.
    *   Added an **Error State** to catch and display connection or API failures.
3.  **Type Safety:** Maintained the existing `Task` and `TaskStatus` types to ensure the incoming API data is correctly mapped to the UI.

### Evaluation
The "Connection Gap" was successfully bridged. By enabling CORS on the backend and implementing proper async state management on the frontend, the application is now a true full-stack prototype. The inclusion of loading/error states significantly improves the user experience during network transitions.
