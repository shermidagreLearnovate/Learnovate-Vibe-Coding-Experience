Task 1.2
The Goal: Write a schema.prisma file with User, Project, and Task (with Enums for status).
Evaluation: "The Data Fluency." Does it correctly implement relations (e.g., 1-to-many)? Does it remember to add @default(now()) and @updatedAt without being prompted?

Sample Prompt: "Create a schema.prisma file for this app. It needs User, Project, and Task models. Tasks should have an ID, title, description, status enum, and relations to both a User and a Project."