# PR Description: Task 3.1 - Tasks Resource & Prisma Integration

## 🎯 Purpose
This PR implements the core backend infrastructure for Task management. It establishes the `Tasks` resource and the global `Prisma` connection layer.

## 🛠️ Changes
- **NestJS CLI Generation:** Created `TasksModule`, `TasksController`, and `TasksService` using `nest g res`.
- **Global Prisma Service:** Implemented `PrismaService` extending `PrismaClient` and exported it via a `@Global()` `PrismaModule`.
- **CRUD Operations:** Fully implemented RESTful endpoints in `TasksService` using Prisma for data persistence.
- **UUID Support:** Configured controllers and services to handle UUID strings instead of default numbers.

## ✅ Verification
- Ran `npm run build` in the backend; build successful.
- Verified `CreateTaskDto` alignment with Prisma enums.

## 📝 Note
This PR sets the stage for Task 3.2 (Service logic and database relations).
