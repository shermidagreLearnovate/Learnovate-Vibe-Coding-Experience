# Task 3.2: High Priority Logic Implementation

**Goal:** Implement a custom business rule for High Priority tasks.

## Execution Log

### Console Prompt (User Directive)
"procede con la phase 3,2 @phases\phase-3-Backend-API\task-3.2\**"

### Sample Prompt (Task Instruction)
"In the Task service, update the create method. If a task is created with a 'High' priority, it should console log 'Notification triggered' and add a prefix '[URGENT]' to the task title."

### Implementation Details
1.  **Branching Strategy:** Created and switched to `feature/task-3.2-high-priority-logic`.
2.  **Logic Injection:** Modified `TasksService.create` to intercept the `createTaskDto`.
3.  **Business Rule Application:**
    *   Condition: Checked if `createTaskDto.priority` is exactly `'HIGH'`.
    *   Action 1: Triggered a console log `'Notification triggered'` (simulated notification).
    *   Action 2: Prefixed the title with `[URGENT] `.
4.  **Data Persistence:** Saved the modified task data to the database using Prisma.

### Evaluation
The logic was cleanly integrated into the service layer, demonstrating how business rules can be decoupled from the raw database operations. The implementation ensures that all high-priority tasks are visually distinct in the system.
