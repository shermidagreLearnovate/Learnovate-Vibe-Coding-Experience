import React from 'react';
import { MoreHorizontal, Calendar, MessageSquare, Paperclip } from 'lucide-react';
import { Task } from '../../types';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const priorityColors = {
    LOW: 'bg-green-100 text-green-700',
    MEDIUM: 'bg-amber-100 text-amber-700',
    HIGH: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing group">
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal size={16} />
        </button>
      </div>
      
      <h4 className="text-slate-900 font-semibold text-sm mb-1">{task.title}</h4>
      {task.description && (
        <p className="text-slate-500 text-xs line-clamp-2 mb-4">{task.description}</p>
      )}

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-slate-400">
        <div className="flex items-center gap-3">
          {task.commentsCount !== undefined && task.commentsCount > 0 && (
            <div className="flex items-center gap-1 text-[10px]">
              <MessageSquare size={12} />
              <span>{task.commentsCount}</span>
            </div>
          )}
          {task.attachmentsCount !== undefined && task.attachmentsCount > 0 && (
            <div className="flex items-center gap-1 text-[10px]">
              <Paperclip size={12} />
              <span>{task.attachmentsCount}</span>
            </div>
          )}
        </div>
        
        {task.dueDate && (
          <div className="flex items-center gap-1 text-[10px]">
            <Calendar size={12} />
            <span>{task.dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
