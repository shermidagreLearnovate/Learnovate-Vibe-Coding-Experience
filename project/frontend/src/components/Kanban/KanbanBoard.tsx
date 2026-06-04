import { useState, useEffect, type FC } from 'react';
import { Plus, MoreVertical, Loader2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import TaskCard from './TaskCard';
import CreateTaskModal from './CreateTaskModal';
import { TaskStatus } from '../../types';
import type { Task, Priority } from '../../types';

interface Column {
  id: TaskStatus;
  title: string;
}

const KanbanBoard: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState<TaskStatus>(TaskStatus.TODO);

  const columns: Column[] = [
    { id: TaskStatus.TODO, title: 'To Do' },
    { id: TaskStatus.IN_PROGRESS, title: 'In Progress' },
    { id: TaskStatus.DONE, title: 'Done' },
  ];

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'An error occurred';
      setError(msg);
      toast.error(`Error loading tasks: ${msg}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = async (taskData: { title: string; description: string; status: TaskStatus; priority: Priority }) => {
    const promise = fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
      const newTask = await response.json();
      setTasks(prev => [...prev, newTask]);
      return newTask;
    });

    toast.promise(promise, {
      loading: 'Creating task...',
      success: (data) => `Task "${data.title}" created successfully`,
      error: 'Error creating task',
    });
  };

  const handleUpdateTask = async (id: string, updates: Partial<Task>) => {
    const promise = fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const updatedTask = await response.json();
      setTasks(prev => prev.map(t => t.id === id ? updatedTask : t));
      return updatedTask;
    });

    toast.promise(promise, {
      loading: 'Updating task...',
      success: (data) => `Task "${data.title}" updated successfully`,
      error: 'Error updating task',
    });
  };

  const openCreateModal = (status: TaskStatus) => {
    setActiveColumn(status);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500 gap-2">
        <Loader2 className="animate-spin" size={24} />
        <span className="font-medium">Loading tasks...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-500 font-medium gap-4">
        <span>Error: {error}</span>
        <button 
          onClick={fetchTasks}
          className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-full items-start relative">
      <Toaster position="bottom-right" richColors />
      
      <CreateTaskModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateTask}
        defaultStatus={activeColumn}
      />

      {columns.map((column) => {
        const columnTasks = tasks.filter(task => task.status === column.id);
        
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
                <button 
                  onClick={() => openCreateModal(column.id)}
                  className="p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors"
                >
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
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onUpdate={handleUpdateTask}
                />
              ))}
              
              <button 
                onClick={() => openCreateModal(column.id)}
                className="flex items-center justify-center gap-2 p-3 mt-1 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/50 transition-all text-xs font-semibold group"
              >
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
