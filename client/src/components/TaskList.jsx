import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { TASK_STATUSES } from '../services/taskService';

function TaskList({ tasks, loading, error, onRefresh, onStatusUpdated }) {
  const [filter, setFilter] = useState('ALL');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    return task.status === filter;
  });

  const plannedCount = tasks.filter((t) => t.status === TASK_STATUSES.PLANNED).length;
  const inProgressCount = tasks.filter((t) => t.status === TASK_STATUSES.IN_PROGRESS).length;
  const completeCount = tasks.filter((t) => t.status === TASK_STATUSES.COMPLETE).length;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 md:p-7">
      {/* Header with Title and Refresh Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-800 flex items-center space-x-2">
            <span>Your Tasks</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
              {tasks.length}
            </span>
          </h2>
          <p className="text-xs text-slate-500">Filtered strictly by your authenticated user UID</p>
        </div>

        <div className="flex items-center space-x-2">
          {/* Refresh button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition disabled:opacity-50 cursor-pointer flex items-center space-x-1.5 shadow-2xs"
            title="Refresh task list"
          >
            <svg
              className={`w-3.5 h-3.5 text-slate-500 ${loading ? 'animate-spin' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      {tasks.length > 0 && (
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 mb-4 text-xs no-scrollbar">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg font-medium transition shrink-0 cursor-pointer ${
              filter === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({tasks.length})
          </button>
          <button
            onClick={() => setFilter(TASK_STATUSES.PLANNED)}
            className={`px-3 py-1.5 rounded-lg font-medium transition shrink-0 cursor-pointer ${
              filter === TASK_STATUSES.PLANNED
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
            }`}
          >
            Planned ({plannedCount})
          </button>
          <button
            onClick={() => setFilter(TASK_STATUSES.IN_PROGRESS)}
            className={`px-3 py-1.5 rounded-lg font-medium transition shrink-0 cursor-pointer ${
              filter === TASK_STATUSES.IN_PROGRESS
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            In Progress ({inProgressCount})
          </button>
          <button
            onClick={() => setFilter(TASK_STATUSES.COMPLETE)}
            className={`px-3 py-1.5 rounded-lg font-medium transition shrink-0 cursor-pointer ${
              filter === TASK_STATUSES.COMPLETE
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            Complete ({completeCount})
          </button>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && tasks.length === 0 && (
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
          <p className="text-xs text-slate-500 font-medium">Fetching your tasks from Cloud Firestore...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 mb-4 flex items-start justify-between">
          <div className="space-y-1">
            <div className="font-semibold flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-rose-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Failed to load tasks</span>
            </div>
            <p className="text-rose-700 leading-relaxed">{error}</p>
          </div>
          <button
            onClick={onRefresh}
            className="px-3 py-1.5 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition shrink-0 ml-3 cursor-pointer shadow-xs"
          >
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && tasks.length === 0 && (
        <div className="py-12 px-4 rounded-xl border border-dashed border-slate-200 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-slate-800 mb-1">No tasks yet</h3>
          <p className="text-xs text-slate-500 max-w-sm">
            You don't have any tasks in your Firestore collection yet. Use the "Create New Task" form to add your first task.
          </p>
        </div>
      )}

      {/* Filtered Empty State */}
      {!loading && !error && tasks.length > 0 && filteredTasks.length === 0 && (
        <div className="py-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-100">
          No tasks found matching status <span className="font-semibold text-slate-700">"{filter}"</span>.
        </div>
      )}

      {/* Tasks List */}
      {!loading && filteredTasks.length > 0 && (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusUpdated={onStatusUpdated}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
