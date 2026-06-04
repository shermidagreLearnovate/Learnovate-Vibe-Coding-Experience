# Containerization Strategy: Vibe Coding Experience

## 📌 Overview
This document outlines the strategy for containerizing the backend and frontend services using Docker and Podman.

## 🚀 Why ':latest'?
We have adopted the `latest` tag strategy for our container images (`backend-vibe-coding:latest`, `frontend-vibe-coding:latest`). 

### Key Motivations:
1.  **Seamless Service Communication:** Using `latest` ensures that during active development, the services are consistently referencing the most recent build, reducing version mismatch issues when services interact.
2.  **Testing Efficiency:** It provides the most convenient way to run integration tests, as a single `podman build` command immediately updates the environment with the newest code changes.
3.  **Always Up-to-Date:** This approach guarantees that the development environment is running the latest version of the application, eliminating the overhead of manual tag management for every iteration.

## 🛠️ Workflow
To keep the services updated:
1. Build the images from the project root:
   ```bash
   podman build -t samuellearnovatecentre/backend-vibe-coding:latest -f backend/Dockerfile .
   podman build -t samuellearnovatecentre/frontend-vibe-coding:latest -f frontend/Dockerfile .
   ```
2. Restart the services using compose:
   ```bash
   podman-compose up -d
   ```
This workflow ensures that your local environment is always synchronized with your latest code changes.
