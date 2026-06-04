import { TaskStatus, Priority } from '@prisma/client';

export class Task {
  id: string = '';
  title: string = '';
  description?: string;
  status: TaskStatus = TaskStatus.TODO;
  priority: Priority = Priority.MEDIUM;
  userId: string = '';
  projectId: string = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
