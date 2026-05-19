# --- Backend Dockerfile ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root workspace configuration
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies (only for backend in this context)
RUN npm install -w backend

# Copy source and prisma
COPY backend/ ./backend/

# Generate Prisma client
RUN cd backend && npx prisma generate

# Build application
RUN npm run build -w backend

# --- Production Image ---
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/backend/node_modules ./backend/node_modules
COPY --from=builder /app/backend/prisma ./backend/prisma

EXPOSE 3000

CMD ["npm", "run", "start:prod", "-w", "backend"]
