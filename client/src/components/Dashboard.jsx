import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserTasks } from '../services/taskService';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [tasksError, setTasksError] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState(null);
  const [actionNotice, setActionNotice] = useState(null);

  // Fetch tasks belonging strictly to the authenticated user
  const fetchTasks = useCallback(async () => {
    if (!user?.uid) return;
    setLoadingTasks(true);
    setTasksError(null);

    try {
      const data = await getUserTasks(user.uid);
      setTasks(data);
    } catch (err) {
      setTasksError(err.message || 'Failed to retrieve tasks.');
    } finally {
      setLoadingTasks(false);
    }
  }, [user?.uid]);

  // Initial load
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Handle task created
  const handleTaskCreated = () => {
    fetchTasks();
    setActionNotice({
      type: 'success',
      text: 'Task successfully created and saved to Cloud Firestore.',
    });
    setTimeout(() => setActionNotice(null), 4000);
  };

  // Handle status updated
  const handleStatusUpdated = (taskId, newStatus) => {
    // Optimistically update local list state
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
    setActionNotice({
      type: 'success',
      text: `Task status updated to "${newStatus}".`,
    });
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    setLogoutError(null);
    try {
      await logout();
    } catch (err) {
      setLogoutError(err.message || 'Failed to log out.');
      setLoggingOut(false);
    }
  };

  const displayName = user?.displayName || 'User';
  const email = user?.email || 'No email provided';
  const photoURL = user?.photoURL;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between p-3.5 sm:p-6 md:p-8">
      {/* Header */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between pb-5 sm:pb-6 border-b border-slate-200">
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <div className="h-9 w-9 sm:h-10 sm:w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-xs shrink-0">
            TF
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-tight">TaskFlow</h1>
            <p className="text-[11px] sm:text-xs text-slate-500 hidden xs:block">Task Management Application</p>
          </div>
        </div>

        {/* User bar & Logout */}
        <div className="flex items-center space-x-2.5 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-2.5 text-right">
            <div>
              <div className="text-xs font-semibold text-slate-800 leading-tight">{displayName}</div>
              <div className="text-[10px] text-slate-500 font-mono">{email}</div>
            </div>
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-full border border-slate-300 object-cover shrink-0"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {initial}
              </div>
            )}
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-3 sm:px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 cursor-pointer"
          >
            {loggingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-6xl w-full mx-auto my-5 sm:my-6 flex-1 space-y-5 sm:space-y-6">
        {/* Global Action Banner */}
        {actionNotice && (
          <div
            className={`p-3.5 rounded-xl border text-xs flex items-center justify-between shadow-xs transition-all ${
              actionNotice.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-emerald-600">✓</span>
              <span>{actionNotice.text}</span>
            </div>
            <button
              onClick={() => setActionNotice(null)}
              className="font-bold ml-2 text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}

        {/* Logout Error Banner */}
        {logoutError && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center justify-between">
            <span>{logoutError}</span>
            <button
              onClick={() => setLogoutError(null)}
              className="font-bold ml-2 cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}

        {/* Welcome & Info Strip */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 sm:space-x-4">
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                referrerPolicy="no-referrer"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-indigo-500 shadow-xs object-cover shrink-0"
              />
            ) : (
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-indigo-600 text-white font-bold text-xl sm:text-2xl flex items-center justify-center shadow-xs shrink-0">
                {initial}
              </div>
            )}
            <div className="min-w-0">
              <div className="inline-flex items-center space-x-1.5 text-xs font-medium text-emerald-600 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Google Session</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                Welcome, {displayName}!
              </h2>
              <p className="text-xs text-slate-500 font-mono truncate">{email}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
              TaskFlow Dashboard
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200 font-medium">
              Firestore: <code className="font-semibold text-slate-800">tasks</code>
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Grid: Create Form & Task List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
          {/* Create Task Form Column */}
          <div className="lg:col-span-1">
            <TaskForm onTaskCreated={handleTaskCreated} />
          </div>

          {/* Task List Column */}
          <div className="lg:col-span-2">
            <TaskList
              tasks={tasks}
              loading={loadingTasks}
              error={tasksError}
              onRefresh={fetchTasks}
              onStatusUpdated={handleStatusUpdated}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto text-center text-xs text-slate-500 pt-5 sm:pt-6 border-t border-slate-200">
        TaskFlow &copy; {new Date().getFullYear()} &bull; Graduate Support Engineer Trainee Assessment
      </footer>
    </div>
  );
}

export default Dashboard;
