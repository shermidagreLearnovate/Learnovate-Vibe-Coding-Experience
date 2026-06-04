import { TaskStatus, Priority } from '@prisma/client';

export class CreateTaskDto {
  title: string = '';
  description?: string;
  status?: TaskStatus = TaskStatus.TODO;
  priority?: Priority = Priority.MEDIUM;
  userId: string = '';
  projectId: string = '';
}
