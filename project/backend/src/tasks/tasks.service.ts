import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    if (createTaskDto.priority === 'HIGH') {
      console.log('Notification triggered');
      createTaskDto.title = `[URGENT] ${createTaskDto.title}`;
    }
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
