import { useState } from 'react'
import MainLayout from './components/Layout/MainLayout'
import KanbanBoard from './components/Kanban/KanbanBoard'
import { Filter, SortAsc, LayoutGrid, List } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="flex flex-col h-full space-y-6">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Project: Vibe-Coding App</h1>
                <p className="text-slate-500 text-sm">Managing the initial development phase and infrastructure.</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-200 p-1 rounded-xl">
                  <button className="p-1.5 bg-white text-indigo-600 rounded-lg shadow-sm">
                    <LayoutGrid size={18} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-slate-700 rounded-lg">
                    <List size={18} />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm transition-all">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm transition-all">
                  <SortAsc size={16} />
                  <span>Sort</span>
                </button>
              </div>
            </div>

            {/* Board Area */}
            <div className="flex-1 min-h-0">
              <KanbanBoard />
            </div>
          </div>
        );
      case 'tasks':
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">General Tasks View</h2>
            <p>Coming soon...</p>
          </div>
        );
      case 'projects':
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">Projects Management</h2>
            <p>Coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">Account Settings</h2>
            <p>Coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </MainLayout>
  )
}

export default App
