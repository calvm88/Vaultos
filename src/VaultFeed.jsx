import { useEffect, useRef, useState } from 'react'; import useSound from 'use-sound'; import blip from '../assets/sfx/blip.mp3';

export default function VaultFeed({ feed }) { const feedEndRef = useRef(null); const [filter, setFilter] = useState('ALL'); const [autoScroll, setAutoScroll] = useState(true); const [play] = useSound(blip, { volume: 0.25 });

useEffect(() => { if (autoScroll) { feedEndRef.current?.scrollIntoView({ behavior: 'smooth' }); } if (feed.length > 0) { play(); } }, [feed]);

const filteredFeed = filter === 'ALL' ? feed : feed.filter(entry => entry.type === filter);

return ( <div className="flex flex-col gap-2 bg-[#06221a] border border-green-600 p-4 rounded-xl overflow-y-auto max-h-[400px] shadow-inner animate-fadeIn"> <div className="flex justify-between items-center mb-2"> <h2 className="text-green-300 text-lg font-bold">VaultFeed Log</h2> <input type="text" placeholder="Search..." onChange={(e) => { const searchTerm = e.target.value.toLowerCase(); setFilter(searchTerm ? 'SEARCH' : 'ALL'); if (searchTerm) { const searchResults = feed.filter(entry => entry.message.toLowerCase().includes(searchTerm)); setFilteredResults(searchResults); } }} className="bg-[#02160f] text-green-200 text-sm px-2 py-1 rounded border border-green-800" /> </div>

<div className="flex gap-1 flex-wrap">
    {['ALL', 'XP', 'FRIEND', 'RELIC', 'SYSTEM'].map(type => (
      <button
        key={type}
        onClick={() => setFilter(type)}
        className={`px-2 py-1 rounded text-xs font-bold border transition-all duration-300 ${
          filter === type ? 'bg-green-600 border-green-400' : 'bg-[#02160f] border-green-700 hover:bg-green-700'
        }`}
      >
        {type}
      </button>
    ))}
    <label className="ml-auto text-xs text-green-500 flex items-center gap-1">
      <input
        type="checkbox"
        checked={autoScroll}
        onChange={() => setAutoScroll(!autoScroll)}
      />
      Auto-scroll
    </label>
  </div>

  <div className="mt-2">
    {filteredFeed.length > 0 ? (
      filteredFeed.map((entry, idx) => (
        <div
          key={idx}
          className="text-green-100 text-xs px-2 py-1 rounded bg-[#013322] hover:bg-green-800 transition-all"
        >
          • {entry.message}
        </div>
      ))
    ) : (
      <div className="text-green-500 italic mt-4">No Vault events yet. Start exploring the Vault...</div>
    )}
  </div>

  <div ref={feedEndRef} />
</div>

); }

