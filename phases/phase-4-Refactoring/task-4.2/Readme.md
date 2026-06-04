# Task 4.2: UX Enhancements (Toasts & Spinners)

**Goal:** Add a "Loading" spinner and a "Toast" notification if the API call fails.

## Execution Log

### Console Prompt (User Directive)
"procedemos a seguir con la phase 4 @phases\phase-4-Refactoring\**"

### Sample Prompt (Task Instruction)
"Add a loading spinner that shows while tasks are being fetched. Also, integrate a toast notification system to show a success message when a task is renamed or moved."

### Implementation Details
1.  **Library Integration:**
    *   Selected and installed **`sonner`**, a high-quality toast library for React, to provide non-intrusive feedback.
    *   Integrated the `<Toaster />` component in the main `KanbanBoard` layout.
2.  **Notification Logic:**
    *   Implemented `toast.promise` for task updates, providing real-time feedback for "Loading", "Success", and "Error" states during the `PATCH` request.
    *   Added global error toasts if the initial `fetch` operation fails.
3.  **Visual Feedback (Loading States):**
    *   Utilized an animated `Loader2` spinner from Lucide to indicate background data fetching.
    *   Enhanced the "Empty/Error" state with a clear message and a "Retry" action button to improve user empathy.
4.  **UX Polish:**
    *   Success messages now include the task title dynamically (e.g., `Task "[URGENT] New Title" updated successfully`).
    *   Toasts are positioned at the bottom-right and use "rich colors" for better visibility.

### Evaluation
The choice of `sonner` demonstrates "User Empathy" by providing a modern, smooth notification system instead of basic alerts. The integration covers both positive and negative feedback loops, ensuring the user is always informed of the system's state.