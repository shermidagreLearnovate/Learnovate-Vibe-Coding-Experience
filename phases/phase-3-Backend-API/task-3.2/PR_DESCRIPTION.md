# PR Description: Task 3.2 - High Priority Business Logic

## 🎯 Purpose
Introduces automated handling for high-priority tasks to improve visibility and notification workflows.

## 🛠️ Changes
- **Business Logic:** Updated `TasksService` to handle `HIGH` priority task creation.
- **Title Automation:** Automatically adds an `[URGENT]` prefix to high-priority task titles.
- **Notification Trigger:** Implemented a log-based notification trigger for system monitoring.

## ✅ Verification
- Build successful via `npm run build`.
- Logic flow verified: mutation occurs before Prisma execution.
