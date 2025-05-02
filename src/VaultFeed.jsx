// src/VaultFeed.jsx import { useEffect, useRef, useState } from 'react'; import { Sparkles, Star, Users, ShieldAlert, BookText, Flame, Gift, Download, } from 'lucide-react';

const FEED_TYPES = [ 'XP', 'RELIC', 'FRIEND', 'SYSTEM', 'LORE', 'ACHIEVEMENT', 'GIFT' ];

const typeColors = { XP: 'text-yellow-300', RELIC: 'text-purple-300', FRIEND: 'text-blue-300', SYSTEM: 'text-red-300', LORE: 'text-emerald-300', GIFT: 'text-pink-300', ACHIEVEMENT: 'text-orange-300', DEFAULT: 'text-green-100', };

const typeIcons = { XP: <Sparkles size={14} className="mr-1 text-yellow-300" />, RELIC: <Star size={14} className="mr-1 text-purple-300" />, FRIEND: <Users size={14} className="mr-1 text-blue-300" />, SYSTEM: <ShieldAlert size={14} className="mr-1 text-red-300" />, LORE: <BookText size={14} className="mr-1 text-emerald-300" />, GIFT: <Gift size={14} className="mr-1 text-pink-300" />, ACHIEVEMENT: <Flame size={14} className="mr-1 text-orange-300" />, DEFAULT: null, };

export default function VaultFeed({ feed = [] }) { const feedEndRef = useRef(null); const [filters, setFilters] = useState(() => new Set(FEED_TYPES));

useEffect(() => { feedEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [feed]);

const toggleFilter = (type) => { const next = new Set(filters); next.has(type) ? next.delete(type) : next.add(type); setFilters(next); };

const isVisible = (entry) => filters.has(entry.type) || filters.size === FEED_TYPES.length;

const exportFeed = () => { const blob = new Blob([JSON.stringify(feed, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'vaultfeed-log.json'; a.click(); URL.revokeObjectURL(url); };

const totalXP = feed.reduce( (sum, e) => (e.type === 'XP' ? sum + (e.amount || 0) : sum), 0 );

return ( <div className="flex flex-col gap-2 bg-[#06221a] border border-green-600 p-4 rounded-xl overflow-y-auto max-h-[500px] shadow-inner animate-fadeIn"> <div className="flex justify-between items-center mb-2"> <h2 className="text-green-300 text-lg font-bold">VaultFeed Log</h2> <button
onClick={exportFeed}
className="text-green-300 text-xs flex items-center gap-1 hover:text-green-500"
> <Download size={14} /> Export </button> </div>

<div className="flex gap-2 mb-2 flex-wrap">
    {FEED_TYPES.map(type => (
      <button
        key={type}
        onClick={() => toggleFilter(type)}
        className={`text-xs px-2 py-1 rounded-full border transition-all ${
          filters.has(type)
            ? 'bg-green-700 text-white border-green-500'
            : 'bg-green-900 text-green-300 border-green-800'
        } hover:bg-green-800`}
      >
        {type}
      </button>
    ))}
  </div>

  {feed.filter(isVisible).length > 0 ? (
    feed.filter(isVisible).map((entry, idx) => {
      const color = typeColors[entry.type] || typeColors.DEFAULT;
      const icon = typeIcons[entry.type] || null;
      const timestamp = entry.time
        ? new Date(entry.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : '';
      return (
        <div
          key={idx}
          className={`text-xs px-2 py-1 rounded flex items-center hover:bg-green-800 transition-all gap-1 ${color}`}
        >
          {icon}
          <span className="flex-1">{entry.message}</span>
          <span className="text-green-500 ml-auto text-[10px] italic">{timestamp}</span>
        </div>
      );
    })
  ) : (
    <div className="text-green-500 italic">No events logged yet for this filter.</div>
  )}

  <div className="text-green-400 text-xs mt-2 italic">Total XP earned: {totalXP}</div>
  <div ref={feedEndRef} />
</div>

); }

