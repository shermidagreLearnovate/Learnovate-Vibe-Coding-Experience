# Task 3.1: Tasks Resource Generation

**Goal:** Generate the NestJS Module, Controller, and Service for Tasks.

## Execution Log

### Console Prompt (User Directive)
"listo, vamos a seguir con la @phases\phase-3-Backend-API\task-3.1\** recuerda como lo estabamos haciendo hasta ahora"

### Sample Prompt (Task Instruction)
"Generate the NestJS module, controller, and service for 'Tasks'. Include standard CRUD endpoints and inject the Prisma service into the Task service."

### Implementation Details
1.  **Branching Strategy:** Created and switched to `feature/task-3.1-tasks-resource` to isolate backend changes.
2.  **Framework Fidelity:** Utilized the NestJS CLI (`npx nest generate resource tasks`) to ensure standard structure and boilerplate for a REST API.
3.  **Prisma Infrastructure:**
    *   Generated a global `PrismaModule` and `PrismaService`.
    *   Implemented `onModuleInit` in `PrismaService` to handle database connectivity.
4.  **Service Logic:**
    *   Injected `PrismaService` into `TasksService`.
    *   Implemented full CRUD operations mapped to Prisma's `task` model.
    *   Ensured compatibility with UUIDs by adjusting controller parameters from `number` to `string`.
5.  **DTO Alignment:** Updated `CreateTaskDto` to import and use `TaskStatus` and `Priority` enums directly from the Prisma client.

### Evaluation
The implementation strictly follows the NestJS "best practices" by using the CLI generator. The creation of a global Prisma module prevents redundant connection logic and prepares the backend for scalable resource generation in future tasks.