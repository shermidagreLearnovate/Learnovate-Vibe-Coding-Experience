# Deployment Guide: Vibe Coding Experience

## 📌 Overview
This guide provides instructions on how to build and run the application using **Podman** and **Docker Compose**.

## 🚀 Deployment Workflow

### 1. Build the Images
Since our Dockerfiles are context-aware, build from the root directory (`project/`):

```bash
# Build Backend
podman build -t samuellearnovatecentre/backend-vibe-coding:latest -f backend/Dockerfile .

# Build Frontend
podman build -t samuellearnovatecentre/frontend-vibe-coding:latest -f frontend/Dockerfile .
```

### 2. Start Services
Use `podman-compose` to orchestrate the database, backend, and frontend containers:

```bash
# Run services in detached mode
podman-compose up -d
```

## 🛠️ Configuration
*   **Database:** A PostgreSQL 15 container (`task-mgmt-db`) running on port `5432`.
*   **Backend:** NestJS API (`task-mgmt-backend`) running on port `3000`, configured via `DATABASE_URL` pointing to the database container.
*   **Frontend:** React/Nginx static server (`task-mgmt-frontend`) running on port `5173`.
*   **Strategy:** We use the `:latest` tag for all images to ensure the development environment always uses the most recent build without manual tag management.
