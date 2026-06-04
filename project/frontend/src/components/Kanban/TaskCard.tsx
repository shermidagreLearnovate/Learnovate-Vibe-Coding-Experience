import { MoreHorizontal, Calendar, MessageSquare, Paperclip } from 'lucide-react';
import type{ Task } from '../../types';

interface TaskCardProps {
  task: Task;
  onUpdate?: (id: string, updates: Partial<Task>) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdate }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState(task.title);

  const priorityColors = {
    LOW: 'bg-green-100 text-green-700',
    MEDIUM: 'bg-amber-100 text-amber-700',
    HIGH: 'bg-red-100 text-red-700',
  };

  const handleTitleSubmit = () => {
    setIsEditing(false);
    if (editedTitle.trim() && editedTitle !== task.title) {
      onUpdate?.(task.id, { title: editedTitle });
    } else {
      setEditedTitle(task.title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTitleSubmit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditedTitle(task.title);
    }
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
      
      {isEditing ? (
        <input
          autoFocus
          className="w-full text-slate-900 font-semibold text-sm mb-1 px-1 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleTitleSubmit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h4 
          className="text-slate-900 font-semibold text-sm mb-1 cursor-text hover:text-indigo-600 transition-colors"
          onClick={() => setIsEditing(true)}
        >
          {task.title}
        </h4>
      )}
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
