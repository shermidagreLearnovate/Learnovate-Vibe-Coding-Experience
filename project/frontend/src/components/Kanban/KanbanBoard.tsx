import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import TaskCard, { Task } from './TaskCard';

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const KanbanBoard: React.FC = () => {
  const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { 
          id: '1', 
          title: 'Design System Update', 
          description: 'Refine the slate/indigo color palette for better accessibility.',
          priority: 'MEDIUM',
          dueDate: 'Jun 12',
          commentsCount: 3
        },
        { 
          id: '2', 
          title: 'User Interviews', 
          description: 'Conduct feedback sessions with the initial research group.',
          priority: 'HIGH',
          dueDate: 'Jun 15',
          attachmentsCount: 2
        },
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { 
          id: '3', 
          title: 'Kanban Board Component', 
          description: 'Implement the modular architecture for the dashboard view.',
          priority: 'HIGH',
          dueDate: 'Jun 05',
          commentsCount: 5,
          attachmentsCount: 1
        },
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { 
          id: '4', 
          title: 'Infrastructure Setup', 
          description: 'Initialize Vite, NestJS, and Prisma orm.',
          priority: 'LOW',
          dueDate: 'May 30',
        },
        { 
          id: '5', 
          title: 'Tailwind Integration', 
          description: 'Set up Tailwind v4 with the new Vite plugin.',
          priority: 'MEDIUM',
          dueDate: 'Jun 01',
        },
      ]
    }
  ];

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-full items-start">
      {columns.map((column) => (
        <div key={column.id} className="flex-shrink-0 w-80 flex flex-col max-h-full">
          {/* Column Header */}
          <div className="flex items-center justify-between px-2 py-3 mb-2">
            <div className="flex items-center gap-3">
              <h3 className="text-slate-900 font-bold text-sm tracking-tight">{column.title}</h3>
              <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {column.tasks.length}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors">
                <Plus size={16} />
              </button>
              <button className="p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          {/* Column Content */}
          <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            
            <button className="flex items-center justify-center gap-2 p-3 mt-1 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/50 transition-all text-xs font-semibold group">
              <Plus size={14} className="group-hover:scale-110 transition-transform" />
              <span>Add new task</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
