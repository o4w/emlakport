
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User, Role, Property, Activity, Task } from './types.ts';
import { storage } from './services/storage.ts';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import PropertyList from './components/PropertyList.tsx';
import PropertyDetail from './components/PropertyDetail.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import Login from './components/Login.tsx';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setProperties(storage.getProperties());
    setUsers(storage.getUsers());
    setActivities(storage.getActivities());
    setTasks(storage.getTasks());
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const addProperty = (property: Property) => {
    const updated = [property, ...properties];
    setProperties(updated);
    storage.saveProperties(updated);
  };

  const addActivity = (activity: Activity) => {
    const updated = [activity, ...activities];
    setActivities(updated);
    storage.saveActivities(updated);
  };

  const addTask = (task: Task) => {
    const updated = [task, ...tasks];
    setTasks(updated);
    storage.saveTasks(updated);
  };

  const toggleTask = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t);
    setTasks(updated);
    storage.saveTasks(updated);
  };

  const addUser = (user: User) => {
    const updated = [...users, user];
    setUsers(updated);
    storage.saveUsers(updated);
  };

  const updateUser = (updatedUser: User) => {
    const updated = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    setUsers(updated);
    storage.saveUsers(updated);
    if (currentUser?.id === updatedUser.id) setCurrentUser(updatedUser);
  };

  const deleteUser = (id: string) => {
    if (users.length <= 1) return;
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    storage.saveUsers(updated);
    if (currentUser?.id === id) handleLogout();
  };

  const deleteProperty = (id: string) => {
    const updated = properties.filter(p => p.id !== id);
    setProperties(updated);
    storage.saveProperties(updated);
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} users={users} />;
  }

  return (
    // FIX: Removed 'future' prop as it is not recognized by HashRouterProps in this version
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar user={currentUser} onLogout={handleLogout} />
        <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard user={currentUser} properties={properties} activities={activities} tasks={tasks} onToggleTask={toggleTask} onAddTask={addTask} />} />
            <Route 
              path="/portfoy" 
              element={<PropertyList user={currentUser} properties={properties} onAdd={addProperty} onDelete={deleteProperty} />} 
            />
            <Route 
              path="/portfoy/:id" 
              element={<PropertyDetail user={currentUser} properties={properties} activities={activities} onAddActivity={addActivity} />} 
            />
            {currentUser.role === Role.ADMIN && (
              <Route 
                path="/admin" 
                element={<AdminPanel users={users} onAddUser={addUser} onUpdateUser={updateUser} onDeleteUser={deleteUser} properties={properties} />} 
              />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
