import React, { useState, useEffect } from 'react';
import { TASK_STATUSES, VALID_STATUSES, updateTaskStatus } from '../services/taskService';
import { useAuth } from '../context/AuthContext';

function TaskItem({ task, onStatusUpdated }) {
  const { user } = useAuth();
  const [currentStatus, setCurrentStatus] = useState(task.status || TASK_STATUSES.PLANNED);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  // Synchronize state if task prop updates from parent refetch
  useEffect(() => {
    if (task.status) {
      setCurrentStatus(task.status);
    }
  }, [task.status]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    if (newStatus === currentStatus) return;

    const previousStatus = currentStatus;
    setIsUpdating(true);
    setUpdateError(null);

    try {
      await updateTaskStatus(task.id, newStatus, user?.uid);
      setCurrentStatus(newStatus);
      if (typeof onStatusUpdated === 'function') {
        onStatusUpdated(task.id, newStatus);
      }
    } catch (err) {
      // Revert select back to previous status on error
      setCurrentStatus(previousStatus);
      setUpdateError(err.message || 'Failed to update status.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Format date helper
  const formatDate = (val) => {
    if (!val) return 'Just now';
    let dateObj;
    if (typeof val.toDate === 'function') {
      dateObj = val.toDate();
    } else if (val.seconds) {
      dateObj = new Date(val.seconds * 1000);
    } else if (val instanceof Date) {
      dateObj = val;
    } else {
      dateObj = new Date(val);
    }

    if (isNaN(dateObj.getTime())) return 'Recently';

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(dateObj);
  };

  // Status badge styling
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case TASK_STATUSES.COMPLETE:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case TASK_STATUSES.IN_PROGRESS:
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case TASK_STATUSES.PLANNED:
      default:
        return 'bg-sky-50 text-sky-700 border-sky-200';
    }
  };

  return (
    <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        {/* Task Details */}
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 break-words">
              {task.title}
            </h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getStatusBadgeStyle(
                currentStatus
              )}`}
            >
              {currentStatus}
            </span>
          </div>

          {task.description && (
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words">
              {task.description}
            </p>
          )}

          <div className="flex items-center space-x-3 text-[11px] text-slate-400 pt-1">
            <span>Created: {formatDate(task.createdAt)}</span>
          </div>
        </div>

        {/* Status Control */}
        <div className="self-start sm:self-center shrink-0 flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <label htmlFor={`status-${task.id}`} className="text-xs text-slate-500 font-medium">
            Status:
          </label>
          <div className="relative">
            <select
              id={`status-${task.id}`}
              value={currentStatus}
              onChange={handleStatusChange}
              disabled={isUpdating}
              className="text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg py-1.5 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer disabled:opacity-50 transition"
            >
              {VALID_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {isUpdating && (
              <div className="absolute right-2.5 top-2.5">
                <div className="w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {updateError && (
        <div className="mt-3 p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <svg className="w-4 h-4 text-rose-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>{updateError}</span>
          </div>
          <button
            onClick={() => setUpdateError(null)}
            className="text-rose-600 hover:text-rose-800 font-bold ml-2 cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
