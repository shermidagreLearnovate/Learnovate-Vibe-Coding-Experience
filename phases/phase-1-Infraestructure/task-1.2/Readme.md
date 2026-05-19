# Task 1.2: Prisma Schema Design

**Goal:** Write a schema.prisma file with User, Project, and Task (with Enums for status).

## Execution Log

### Console Prompt (User Directive)
"continua la task dos cogiendo las instrucciones de @phases\phase-1-Infraestructure\task-1.2\**"

### Sample Prompt (Task Instruction)
"Create a schema.prisma file for this app. It needs User, Project, and Task models. Tasks should have an ID, title, description, status enum, and relations to both a User and a Project."

### Implementation Details
1.  **File Location:** Created `project/backend/prisma/schema.prisma`.
2.  **Model Definition:** 
    *   `User`: Email (unique), Name, and relations to Projects and Tasks.
    *   `Project`: Title, Description, and relation to its Owner (User) and Tasks.
    *   `Task`: Title, Description, Status (Enum), Priority (Enum), and relations to both User and Project.
3.  **Data Fluency (Proactive Additions):**
    *   Implemented `UUID` for IDs for better scalability.
    *   Added `createdAt` with `@default(now())` and `updatedAt` with `@updatedAt` to all models.
    *   Included a `Priority` enum for richer task management logic (useful for Phase 3).
    *   Set sensible defaults like `TODO` status and `MEDIUM` priority.

### Evaluation
The model correctly implemented the requested relations (1-to-many for User-Project and User-Task) and proactively added standard auditing fields and UUIDs, demonstrating professional data modeling habits.