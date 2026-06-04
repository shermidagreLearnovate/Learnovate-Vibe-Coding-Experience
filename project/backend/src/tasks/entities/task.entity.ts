import { TaskStatus, Priority } from '@prisma/client';

export class Task {
  id: string = '';
  title: string = '';
  description?: string;
  status: TaskStatus = 'TODO' as TaskStatus;
  priority: Priority = 'MEDIUM' as Priority;
  userId: string = '';
  projectId: string = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
