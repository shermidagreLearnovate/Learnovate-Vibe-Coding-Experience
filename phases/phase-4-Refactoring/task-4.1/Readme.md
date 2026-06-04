# Task 4.1: Inline Task Renaming

**Goal:** Add a feature where clicking a task title turns it into an input field to rename it.

## Execution Log

### Console Prompt (User Directive)
"procedemos a seguir con la phase 4 @phases\phase-4-Refactoring\**"

### Sample Prompt (Task Instruction)
"Modify the TaskCard component. When I click on the task title, it should turn into an input field so I can rename it. Pressing 'Enter' or clicking away should save the new title."

### Implementation Details
1.  **TaskCard Component Refactoring:**
    *   Introduced `isEditing` and `editedTitle` local states.
    *   Conditional Rendering: Switched between an `<h4>` and an `<input>` based on the editing state.
    *   Event Handling: Added `onBlur` and `onKeyDown` (Enter/Escape) to handle save and cancel operations.
    *   Visual Feedback: Added a hover state to the title to indicate it's interactable (`cursor-text`, `hover:text-indigo-600`).
2.  **KanbanBoard Integration:**
    *   Implemented `handleUpdateTask` to perform asynchronous `PATCH` requests to the NestJS backend.
    *   State Synchronization: Updated the local `tasks` state with the response from the server to ensure UI consistency without a full reload.
    *   Prop Drilling: Passed the update handler to all `TaskCard` instances.
3.  **Surgical Precision:** Modified only the necessary lines in `TaskCard.tsx` and `KanbanBoard.tsx`, preserving existing styling and structure.

### Evaluation
The implementation achieves the goal with minimal code impact. The use of standard React patterns (lifting state for the API call while keeping editing state local) ensures a responsive and reliable user experience. The interaction feels native to the Kanban board and correctly persists changes to the database.