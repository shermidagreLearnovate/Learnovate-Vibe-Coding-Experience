# PR Description: Task 3.3 - Frontend-Backend Integration

## 🎯 Purpose
This PR transforms the application from a static prototype into a functional full-stack system by connecting the React frontend to the NestJS backend.

## 🛠️ Changes
- **Backend CORS:** Enabled Cross-Origin Resource Sharing in `main.ts`.
- **API Fetching:** Refactored `KanbanBoard` to fetch live data from the backend.
- **UX Enhancements:** Added loading spinners and error handling for the API connection phase.
- **State Management:** Replaced mock data with dynamic React state.

## ✅ Verification
- Frontend build successful (`npm run build`).
- Backend build successful (`npm run build`).
- Code review: Verified that the fetch URL matches the backend port (3000).

## 📝 Note
To see the board in action, both the backend (`npm run start:dev`) and frontend (`npm run dev`) must be running simultaneously.
