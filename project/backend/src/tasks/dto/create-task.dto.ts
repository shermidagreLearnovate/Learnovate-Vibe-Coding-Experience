import { TaskStatus, Priority } from '@prisma/client';

export class CreateTaskDto {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: Priority;
  userId: string;
  projectId: string;
}
