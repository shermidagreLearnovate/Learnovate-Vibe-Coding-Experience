import MainLayout from './components/Layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, Samuel!</h1>
          <p className="text-slate-500">Here's what's happening with your projects today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium">Total Tasks</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <span className="font-bold">+20%</span>
              <span className="ml-1 text-slate-400">from last week</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium">In Progress</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">5</p>
            <div className="mt-4 flex items-center text-xs text-indigo-600">
              <span className="font-bold">Active now</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium">Completed</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">84%</p>
            <div className="mt-4 w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-indigo-600 h-1.5 rounded-full w-[84%]"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Tasks</h2>
            <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-700">View all</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { title: 'Implement Prisma Schema', status: 'Done', priority: 'High' },
              { title: 'Configure Tailwind CSS', status: 'In Progress', priority: 'Medium' },
              { title: 'Build Kanban Board', status: 'Todo', priority: 'High' },
            ].map((task, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    task.status === 'Done' ? 'bg-green-500' : 
                    task.status === 'In Progress' ? 'bg-indigo-500' : 'bg-slate-300'
                  }`}></div>
                  <span className="text-slate-700 font-medium">{task.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                    task.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default App
