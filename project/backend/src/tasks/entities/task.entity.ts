import { TaskStatus, Priority } from '@prisma/client';

export class Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  userId: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}
