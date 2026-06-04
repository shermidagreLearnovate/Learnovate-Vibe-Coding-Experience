import { TaskStatus, Priority } from '@prisma/client';

export class CreateTaskDto {
  title: string = '';
  userId: string = '';
  projectId: string = '';
  description?: string;
  status?: TaskStatus = 'TODO' as TaskStatus;
  priority?: Priority = 'MEDIUM' as Priority;
}
