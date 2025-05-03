// src/VaultRelicEquip.jsx import { useState, useEffect } from 'react'; import { CheckCircle, Sparkles } from 'lucide-react'; import useSound from 'use-sound'; import equipSound from '../assets/sfx/relic-equip.mp3';

const relicsData = [ { name: 'Glitchcore Frame', rarity: 'Legendary', description: 'A distorted UI relic that pulses with ancient code.' }, { name: 'Neon TamAI Core', rarity: 'Epic', description: 'Custom TamAI variant infused with neon aura.' }, { name: 'Hacker HUD Green', rarity: 'Rare', description: 'Retro-inspired HUD style from the early net age.' }, { name: 'Echo Shader', rarity: 'Common', description: 'Flickering pixel shader with Vault shimmer.' }, ];

const rarityColors = { Common: 'border-gray-500', Rare: 'border-blue-400', Epic: 'border-pink-400', Legendary: 'border-yellow-400', };

export default function VaultRelicEquip({ relics = [], setRelics = () => {}, setFeed = () => {}, setToasts = () => {}, setTheme = () => {} }) { const [equipped, setEquipped] = useState(localStorage.getItem('equippedRelic') || null); const [filter, setFilter] = useState('ALL'); const [play] = useSound(equipSound);

useEffect(() => { localStorage.setItem('equippedRelic', equipped); }, [equipped]);

const handleEquip = (name) => { setEquipped(name); play(); setFeed(prev => [...prev, { type: 'RELIC', message: Relic equipped: ${name}, time: Date.now() }]); setToasts(prev => [...prev, Equipped ${name}]); setTheme(name); };

const filtered = filter === 'ALL' ? relicsData : relicsData.filter(r => r.rarity === filter);

return ( <div className="p-4 bg-[#031d14] rounded-xl border border-green-600 shadow-inner animate-fadeIn"> <div className="flex justify-between items-center mb-4"> <h2 className="text-green-300 text-lg font-bold">Vault Relics</h2> <div className="flex gap-1"> {['ALL', 'Common', 'Rare', 'Epic', 'Legendary'].map(type => ( <button key={type} onClick={() => setFilter(type)} className={text-xs px-2 py-1 rounded border transition-all ${filter === type ? 'bg-green-700 border-green-500' : 'bg-green-900 border-green-800 text-green-300'} hover:bg-green-800} > {type} </button> ))} </div> </div>

<div className="grid grid-cols-2 gap-4">
    {filtered.map((relic) => (
      <div
        key={relic.name}
        className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 group ${rarityColors[relic.rarity]} ${equipped === relic.name ? 'ring-2 ring-yellow-400' : ''}`}
        onClick={() => handleEquip(relic.name)}
      >
        <div className="text-sm font-bold text-green-200 flex items-center gap-1">
          {equipped === relic.name && <CheckCircle size={16} className="text-yellow-400" />} {relic.name}
        </div>
        <div className="text-xs text-green-500 italic">{relic.rarity}</div>
        <div className="text-xs text-green-400 mt-1">{relic.description}</div>
        {equipped === relic.name && (
          <div className="absolute bottom-2 right-2 animate-pulse text-yellow-300 text-xs flex items-center gap-1">
            <Sparkles size={12} /> Equipped
          </div>
        )}
      </div>
    ))}
  </div>
</div>

); }

