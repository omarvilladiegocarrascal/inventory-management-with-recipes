
import React from 'react';

interface AlertProps {
  status: 'success' | 'error' | 'warning' | 'info';
  description: string;
}

export const AlertBanner: React.FC<AlertProps> = ({ status, description }) => {
  const baseClasses = 'px-4 py-3 rounded-md border flex items-center gap-3';

  const statusClasses = {
    success: 'bg-green-50 border-green-300 text-green-800',
    error: 'bg-red-50 border-red-300 text-red-800',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    info: 'bg-blue-50 border-blue-300 text-blue-800',
  };

  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }[status];

  return (
    <div className={`${baseClasses} ${statusClasses[status]}`}>
      <span className="text-lg">{icon}</span>
      <span>{description}</span>
    </div>
  );
};

