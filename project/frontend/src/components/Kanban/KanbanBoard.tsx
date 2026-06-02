import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import TaskCard from './TaskCard';
import type{ Task, TaskStatus } from '../../types';
import { mockTasks } from '../../data/mockData';

interface Column {
  id: TaskStatus;
  title: string;
}

const KanbanBoard: React.FC = () => {
  const columns: Column[] = [
    { id: TaskStatus.TODO, title: 'To Do' },
    { id: TaskStatus.IN_PROGRESS, title: 'In Progress' },
    { id: TaskStatus.DONE, title: 'Done' },
  ];

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-full items-start">
      {columns.map((column) => {
        const columnTasks = mockTasks.filter(task => task.status === column.id);
        
        return (
          <div key={column.id} className="flex-shrink-0 w-80 flex flex-col max-h-full">
            {/* Column Header */}
            <div className="flex items-center justify-between px-2 py-3 mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-slate-900 font-bold text-sm tracking-tight">{column.title}</h3>
                <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {columnTasks.length}
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
              {columnTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
              
              <button className="flex items-center justify-center gap-2 p-3 mt-1 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/50 transition-all text-xs font-semibold group">
                <Plus size={14} className="group-hover:scale-110 transition-transform" />
                <span>Add new task</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
