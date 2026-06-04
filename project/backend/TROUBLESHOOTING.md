# Backend Container Runtime Troubleshooting

## 📌 Issue: Module Not Found (`/app/backend/dist/main`)

During the containerized deployment of the backend, the service failed to start with a `MODULE_NOT_FOUND` error.

### Root Cause Analysis
The issue stemmed from a path resolution mismatch between the Docker image structure and the `package.json` start script.

1.  **Image Structure:** In the production Dockerfile, the application files are copied into `/app/backend/dist`.
2.  **Working Directory:** The Dockerfile sets the `WORKDIR` to `/app`.
3.  **The Conflict:** The `start:prod` script was initially configured as `node dist/main`. When running inside the container (working directory `/app`), it looked for `/app/dist/main`, but the files were actually located at `/app/backend/dist/main`. 
4.  **Misguided Fix:** Attempts to change the script to `node backend/dist/main` resulted in the container looking for `/app/backend/backend/dist/main` because of how `npm` workspaces and pathing interact within the `WORKDIR`.

### Resolution
The finalized solution involves ensuring the start script correctly maps to the relative path within the containerized environment. By ensuring the Dockerfile structure and the `package.json` scripts are perfectly synchronized with the container's `WORKDIR`, we resolved the module resolution failure.

---
*Documented for reference as we move to Phase 4.*
