import React from 'react';

function LoadingSpinner({ message = 'Loading TaskFlow...' }) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center max-w-sm w-full">
        <div className="h-12 w-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-4"></div>
        <div className="text-base font-semibold text-slate-800">{message}</div>
        <p className="text-xs text-slate-500 mt-1">Checking authentication state...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;

