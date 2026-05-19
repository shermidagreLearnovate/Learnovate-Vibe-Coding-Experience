# Learnovate: Vibe-Coding Research Experience

This project is a dedicated research study designed to evaluate the capabilities of AI models (specifically Gemini 2.0) in a "vibe-coding" and autonomous development context. The goal is to build a full-stack Task Management Application while documenting the model's performance, autonomy, and "visual taste."

---

## 🎯 Project Goals

### LLM Research
- **Subscription Evaluation:** Identify which subscription-based AI services provide the best value without excessive cost.
- **Open Source Benchmarking:** Evaluate open-source models that approach the capabilities of paid services.
  - Criteria: "Clever enough" / "Not too stupid."
  - Performance: Runs efficiently on reasonable hardware.

### Team Integration
- **Workflow Optimization:** Identify quick ways to integrate basic vibe-coding into existing professional workflows.
- **Efficiency:** Document things to avoid and potential wastes of time when using AI for development.

---

## 📋 Rules of Engagement

1.  **Consistency:** Start each task with the provided 'starter prompt' but assist the model if it encounters blockers.
2.  **Traceability:** Record all prompts used during the development process.
3.  **Version Control:** Commit changes to the repository after every completed task.
4.  **Visual Documentation:** Capture screenshots of the running application at key milestones.
5.  **Insights:** Document interesting or unexpected suggestions made by the LLM.
6.  **Transparency:** Document any additional instructions or system prompts defined in the environment.

---

## 🧠 Evaluation Criteria (Keep in Mind)

During the research, we evaluate the model based on:
1.  **Context Awareness:** Did it remember decisions from Task 1.1 when working on Task 3.2?
2.  **Correction Loops:** How many "No, I meant..." prompts were required to reach the goal?
3.  **Code Cleanliness:** Is the code idiomatic and clean, or does it require immediate refactoring?
4.  **"The Magic":** Did the model proactively implement a cool feature or optimization that wasn't explicitly asked for?
5.  **Recovery Rate:** When corrected, does it fix the error perfectly, or does it cause a "Whack-a-Mole" effect (breaking something else)?

---

## 🗺️ Project Roadmap (Phases)

### Phase 1: Infrastructure
- **Task 1.1:** Initialize monorepo structure (React/Vite + NestJS).
- **Task 1.2:** Prisma Schema design (User, Project, Task models).
- **Task 1.3:** Dockerization (Frontend, Backend, PostgreSQL).

### Phase 2: Frontend
- **Task 2.1:** Tailwind CSS setup and Main Layout (Sidebar/Topbar).
- **Task 2.2:** Kanban Board component (Columns and Task Cards).
- **Task 2.3:** Type definitions and Mock Data integration.

### Phase 3: Backend API
- **Task 3.1:** NestJS CRUD generation for Tasks.
- **Task 3.2:** Business logic implementation (High-priority notifications).
- **Task 3.3:** Frontend-Backend integration (Replacing mock data with API calls).

### Phase 4: Refactoring & Polish
- **Task 4.1:** Inline editing (Click-to-rename task titles).
- **Task 4.2:** UX Enhancements (Loading spinners and Toast notifications).

---

## 🚀 Current Status
**Research Mode: Initialized**
- Context: React/NestJS/Prisma stack.
- Configurations: Updated `.github/gemini` and `project/.gemini`.
- Next Step: Start Task 1.1.
