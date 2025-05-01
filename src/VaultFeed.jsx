// src/VaultFeed.jsx import { useEffect, useRef } from 'react';

export default function VaultFeed({ feed }) { const feedEndRef = useRef(null);

useEffect(() => { feedEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [feed]);

const formatEntry = (entry, idx) => { let color = 'text-green-100'; if (entry.type === 'XP') color = 'text-yellow-300'; if (entry.type === 'RELIC') color = 'text-purple-300'; if (entry.type === 'FRIEND') color = 'text-blue-300'; if (entry.type === 'SYSTEM') color = 'text-red-300'; if (entry.type === 'LORE') color = 'text-amber-200'; if (entry.type === 'EVENT') color = 'text-pink-300';

return (
  <div
    key={idx}
    className={`text-xs px-2 py-1 rounded hover:bg-green-800 transition-all ${color}`}
  >
    • {entry.message}
  </div>
);

};

return ( <div className="flex flex-col gap-2 bg-[#06221a] border border-green-600 p-4 rounded-xl overflow-y-auto max-h-[400px] shadow-inner animate-fadeIn"> <h2 className="text-green-300 text-lg mb-2 font-bold">VaultFeed Log</h2> {feed.length > 0 ? ( feed.map((entry, idx) => formatEntry(entry, idx)) ) : ( <div className="text-green-500 italic">No Vault events yet. Start exploring the Vault...</div> )} <div ref={feedEndRef} /> </div> ); }

