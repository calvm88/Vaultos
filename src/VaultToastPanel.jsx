// src/VaultToastPanel.jsx import { useEffect } from 'react';

export default function VaultToastPanel({ toasts = [], onClear }) { useEffect(() => { if (toasts.length > 0) { const timer = setTimeout(() => { if (onClear) onClear(); }, 5000); // auto-clear after 5 seconds

return () => clearTimeout(timer);
}

}, [toasts]);

const formatToast = (msg, idx) => { let bg = 'bg-green-800'; let text = 'text-green-100'; if (msg.includes('XP')) { bg = 'bg-yellow-600'; text = 'text-yellow-100'; } if (msg.includes('Achievement')) { bg = 'bg-blue-700'; text = 'text-blue-100'; } if (msg.includes('Relic')) { bg = 'bg-purple-800'; text = 'text-purple-100'; }

return (
  <div
    key={idx}
    className={`px-4 py-2 text-sm rounded shadow-lg mb-2 transition-all ${bg} ${text}`}
  >
    {msg}
  </div>
);

};

return ( <div className="fixed bottom-6 right-6 w-64 z-50 animate-fadeIn"> {toasts.map((toast, idx) => formatToast(toast, idx))} {onClear && toasts.length > 0 && ( <button
onClick={onClear}
className="mt-2 text-xs bg-green-700 text-green-100 px-2 py-1 rounded hover:bg-green-600"
> Dismiss All </button> )} </div> ); }

