import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route 
        path="/projects" 
        element={
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">Projects Management</h2>
            <p>Coming soon...</p>
          </div>
        } 
      />
      <Route 
        path="/tasks" 
        element={
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">General Tasks View</h2>
            <p>Coming soon...</p>
          </div>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-xl font-bold">Account Settings</h2>
            <p>Coming soon...</p>
          </div>
        } 
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
