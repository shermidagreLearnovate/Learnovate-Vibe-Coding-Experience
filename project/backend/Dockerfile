# --- Backend Dockerfile ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root workspace configuration
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install all dependencies
RUN npm install

# Copy source and prisma
COPY backend/ ./backend/

# Build
WORKDIR /app/backend
RUN npx prisma generate
RUN npm run build

# --- Production Image ---
FROM node:20-alpine

WORKDIR /app/backend

# Copy package files
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/backend/package*.json ./

# Install ONLY production dependencies
RUN npm install --omit=dev --workspace=backend

# Copy build artifacts and prisma schema
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/prisma ./prisma

# Generate Prisma client in the final image
RUN npx prisma generate

EXPOSE 3000

# Verify dist content
RUN ls -R dist

CMD ["node", "dist/main.js"]
