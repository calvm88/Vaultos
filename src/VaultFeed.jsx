// src/VaultFeed.jsx import { useEffect, useRef, useState } from 'react'; import { Sparkles, Star, Users, ShieldAlert, Download, Clock3, BookOpenCheck } from 'lucide-react';

export default function VaultFeed({ feed = [] }) { const feedEndRef = useRef(null); const [filter, setFilter] = useState('ALL'); const [sortOrder, setSortOrder] = useState('newest'); const [showCondensed, setShowCondensed] = useState(false);

useEffect(() => { feedEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [feed]);

const typeColors = { XP: 'text-yellow-300', RELIC: 'text-purple-300', FRIEND: 'text-blue-300', SYSTEM: 'text-red-300', LORE: 'text-emerald-300', DEFAULT: 'text-green-100' };

const typeIcons = { XP: <Sparkles size={14} className="mr-1 text-yellow-300" />, RELIC: <Star size={14} className="mr-1 text-purple-300" />, FRIEND: <Users size={14} className="mr-1 text-blue-300" />, SYSTEM: <ShieldAlert size={14} className="mr-1 text-red-300" />, LORE: <BookOpenCheck size={14} className="mr-1 text-emerald-300" />, DEFAULT: null };

const totalXP = feed.reduce((sum, entry) => entry.type === 'XP' ? sum + (entry.amount || 0) : sum, 0);

const filteredFeed = filter === 'ALL' ? feed : feed.filter(entry => entry.type === filter); const sortedFeed = [...filteredFeed].sort((a, b) => { return sortOrder === 'newest' ? new Date(b.timestamp || 0) - new Date(a.timestamp || 0) : new Date(a.timestamp || 0) - new Date(b.timestamp || 0); });

const formatEntry = (entry, idx) => { const color = typeColors[entry.type] || typeColors.DEFAULT; const icon = typeIcons[entry.type] || null; const time = entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString() : '';

return (
  <div
    key={idx}
    className={`text-xs px-2 py-1 rounded flex items-center hover:bg-green-800 transition-all ${color} ${entry.new ? 'animate-pulse' : ''}`}
    onClick={() => navigator.clipboard.writeText(entry.message)}
  >
    {icon}
    <span className="mr-2">{entry.message}</span>
    {time && <Clock3 size={12} className="ml-auto text-green-500" title={time} />}
  </div>
);

};

const exportFeed = () => { const blob = new Blob([JSON.stringify(feed, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'vaultfeed-log.json'; a.click(); URL.revokeObjectURL(url); };

return ( <div className="flex flex-col gap-2 bg-[#06221a] border border-green-600 p-4 rounded-xl overflow-y-auto max-h-[500px] shadow-inner animate-fadeIn"> <div className="flex justify-between items-center mb-2"> <h2 className="text-green-300 text-lg font-bold">VaultFeed Log</h2> <div className="flex items-center gap-2"> <button onClick={() => setShowCondensed(!showCondensed)} className="text-xs px-2 py-1 rounded bg-green-900 hover:bg-green-700 text-green-200"> {showCondensed ? 'Full View' : 'Condensed'} </button> <button onClick={exportFeed} className="text-green-300 text-xs flex items-center gap-1 hover:text-green-500"> <Download size={14} /> Export </button> </div> </div> <div className="flex gap-2 mb-2 flex-wrap"> {['ALL', 'XP', 'RELIC', 'FRIEND', 'SYSTEM', 'LORE'].map(type => ( <button key={type} onClick={() => setFilter(type)} className={text-xs px-2 py-1 rounded-full border ${filter === type ? 'bg-green-700 text-white' : 'bg-green-900 text-green-300'} hover:bg-green-800 transition} > {type} </button> ))} <button onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')} className="text-xs px-2 py-1 rounded-full border bg-green-900 text-green-300 hover:bg-green-700" > {sortOrder === 'newest' ? 'Newest' : 'Oldest'} </button> </div> {sortedFeed.length > 0 ? ( sortedFeed.map(formatEntry) ) : ( <div className="text-green-500 italic">No events logged yet for this category.</div> )} <div className="text-green-400 text-xs mt-2 italic">Total XP earned: {totalXP}</div> <div ref={feedEndRef} /> </div> ); }

