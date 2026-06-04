# 🔄 Application Flow Diagrams

This document illustrates the core interactions within the **Learnovate Task Management System**. We use **Mermaid** sequence diagrams to show the data flow between the User, Frontend, Backend, and Database layers.

---

## 1. Task Creation Flow
This diagram shows the process of adding a new task through the UI modal.

```mermaid
sequenceDiagram
    participant User
    participant Frontend as React (Vite)
    participant Backend as NestJS (API)
    participant DB as PostgreSQL (Prisma)

    User->>Frontend: Clicks "Add new task"
    Frontend->>User: Displays CreateTaskModal
    User->>Frontend: Fills title/description & clicks "Create"
    
    Note over Frontend: Validation & Toast (Loading)
    
    Frontend->>Backend: POST /tasks (JSON payload)
    
    Note over Backend: DTO Validation & Business Rules
    Backend->>Backend: Check Priority (Add [URGENT] if HIGH)
    
    Backend->>DB: prisma.task.create()
    DB-->>Backend: Return created task (with ID)
    
    Backend-->>Frontend: 201 Created (JSON Response)
    
    Note over Frontend: Update local state (setTasks)
    Frontend-->>User: Show Success Toast & Close Modal
```

---

## 2. Inline Task Renaming Flow
This diagram shows the "Surgical Refactor" feature where a user renames a task directly on the card.

```mermaid
sequenceDiagram
    participant User
    participant Frontend as React (TaskCard)
    participant Backend as NestJS (API)
    participant DB as PostgreSQL (Prisma)

    User->>Frontend: Clicks on task title
    Frontend->>User: Switches text to <input>
    
    User->>Frontend: Edits title & presses "Enter" (or Blur)
    
    Note over Frontend: Toast (Loading: Updating task...)
    
    Frontend->>Backend: PATCH /tasks/:id ({ title: "New Title" })
    
    Backend->>DB: prisma.task.update()
    DB-->>Backend: Return updated record
    
    Backend-->>Frontend: 200 OK
    
    Note over Frontend: Sync local state
    Frontend-->>User: Show Success Toast & Switch to <h4>
```

---

## 3. Initial Data Loading (Dashboard)
How the Kanban board populates its data on load.

```mermaid
sequenceDiagram
    participant Frontend as React (KanbanBoard)
    participant Backend as NestJS (API)
    participant DB as PostgreSQL (Prisma)

    Note over Frontend: useEffect() triggers on Mount
    
    Frontend->>Backend: GET /tasks
    
    Backend->>DB: prisma.task.findMany()
    DB-->>Backend: Array of Task objects
    
    Backend-->>Frontend: 200 OK (JSON Array)
    
    Note over Frontend: Filter tasks by Status (TODO/IN_PROGRESS/DONE)
    Frontend-->>Frontend: Render TaskCards in Columns
```

---

## 💡 Key Architectural Patterns
- **Optimistic/Async Updates:** The UI uses `sonner` to provide immediate feedback while the network request is in flight.
- **Stateless Backend:** The API relies on Prisma for efficient querying and doesn't hold session state between requests.
- **Prop Drilling vs State Management:** For this prototype, handlers are passed as props (`onUpdate`) to maintain simplicity.
