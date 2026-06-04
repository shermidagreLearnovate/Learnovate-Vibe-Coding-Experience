# 🚀 Learnovate: Vibe-Coding Experience

[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![NestJS](https://img.shields.io/badge/Backend-NestJS%2011-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma%206-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind](https://img.shields.io/badge/Styling-Tailwind%204-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Infra-Docker%20%2F%20Podman-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

A professional, full-stack **Task Management Application** built as part of an autonomous AI development research study ("Vibe-Coding"). This project showcases a high-fidelity Kanban experience, a robust NestJS backend, and a containerized infrastructure.

---

## ✨ Key Features

- **🎯 Interactive Kanban Board:** Drag-and-drop-ready UI with dynamic columns (To Do, In Progress, Done).
- **📝 Inline Editing:** Rename tasks instantly by clicking on their titles.
- **➕ Functional Creation:** Add new tasks via a modern modal with priority and status selection.
- **🔔 Pro UX:** Real-time feedback with professional toast notifications (Sonner) and loading states.
- **🏗️ Solid Architecture:** Monorepo structure using NPM Workspaces for shared logic and easy management.
- **🐳 Container First:** Fully dockerized setup compatible with both Docker and Podman.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (Modern Slate/Indigo palette)
- **Icons:** Lucide React
- **Notifications:** Sonner

### Backend
- **Framework:** NestJS 11
- **ORM:** Prisma v6
- **Language:** TypeScript
- **Database:** PostgreSQL 15

### Infrastructure
- **Orchestration:** Docker Compose / Podman Compose
- **Container Runtime:** Node 20-Alpine

---

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js:** v20 or higher
- **NPM:** v10 or higher
- **Docker / Podman:** Installed and running

### 🔧 Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shermidagreLearnovate/Learnovate-Vibe-Coding-Experience.git
   cd Learnovate-Vibe-Coding-Experience/project
   ```

2. **Install Dependencies:**
   Install all dependencies for the entire monorepo:
   ```bash
   npm install
   ```

3. **Infrastructure Setup:**
   Start the database and services using Docker/Podman Compose:
   ```bash
   # Using Docker
   docker-compose up -d
   
   # Using Podman
   podman-compose up -d
   ```

4. **Initialize Database:**
   Push the Prisma schema to your local database:
   ```bash
   # From the project directory
   cd backend
   npx prisma db push
   ```

5. **Run in Development Mode:**
   You can run both services from the root `project` directory:
   ```bash
   # Backend (localhost:3000)
   npm run backend:dev
   
   # Frontend (localhost:5173)
   npm run frontend:dev
   ```

---

## 📂 Architecture Overview

```text
Learnovate-Vibe-Coding-Experience/
├── project/                # The main application
│   ├── frontend/           # React + Vite + Tailwind
│   ├── backend/            # NestJS + Prisma
│   └── docker-compose.yml  # Infrastructure orchestration
├── phases/                 # Research documentation by phase
└── .github/gemini/         # AI Instruction and workflow center
```

---

## 📈 Project Progress

| Phase | Goal | Status |
|---|---|---|
| **Phase 1** | Infrastructure & Monorepo Setup | ✅ Completed |
| **Phase 2** | High-Fidelity Frontend UI | ✅ Completed |
| **Phase 3** | Backend API & Data Persistence | ✅ Completed |
| **Phase 4** | Refactoring & Advanced UX | ✅ Completed |
| **Phase 5** | Comprehensive Documentation | 🏗️ In Progress |

---

## 🧪 Development Workflow

This project follows a **Research -> Strategy -> Execution** lifecycle managed by the **Gemini CLI Agent**.
- **Surgical Precision:** Code changes are applied targetedly to avoid regressions.
- **Validation:** Every change is verified through builds and runtime checks.
- **Traceability:** Every task is documented in the `phases/` directory with its own branch and summary.

---

## 📝 License
This project is part of a private research study. See the `README.md` in the root for specific study goals and rules.
