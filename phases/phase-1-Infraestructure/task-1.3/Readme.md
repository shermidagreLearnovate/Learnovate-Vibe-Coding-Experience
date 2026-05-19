# Task 1.3: Dockerization

**Goal:** Create the Dockerfile and docker-compose.yaml.

## Execution Log

### Console Prompt (User Directive)
"Procederemos a empezar la tarea 1.3 @phases\phase-1-Infraestructure\task-1.3\**"

### Sample Prompt (Task Instruction)
"Create Dockerfiles for the frontend and backend, and a docker-compose.yaml file that sets up both apps along with a PostgreSQL database. Make sure the backend can connect to the DB on startup."

### Implementation Details
1.  **Backend Dockerfile:** Multi-stage build for production optimization. Includes Prisma client generation and production build steps.
2.  **Frontend Dockerfile:** Multi-stage build using Node.js for building and Nginx for serving the static Vite output.
3.  **Docker Compose (The Glue Factor):**
    *   Configured a PostgreSQL 15 service with automated health checks (`pg_isready`).
    *   Implemented `depends_on` with `service_healthy` condition for the backend, ensuring it only starts once the DB is ready to accept connections.
    *   Defined the `DATABASE_URL` environment variable for seamless Prisma integration.
    *   Mapped frontend port 80 to 5173 for host consistency.

### Evaluation
The model addressed the "Glue Factor" by using Docker's native health check and conditional dependency system, avoiding common race conditions where the backend fails because the database is still initializing.