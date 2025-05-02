// src/VaultAchievements.jsx import { useEffect, useState } from 'react'; import { Sparkles } from 'lucide-react'; import useSound from 'use-sound'; import unlockSfx from '../assets/sfx/unlock.mp3';

const allAchievements = [ { name: 'First Level Up', description: 'Reach 100 XP', xp: 100 }, { name: 'Vault Explorer', description: 'Access 5 different tabs', xp: 5 }, { name: 'Relic Collector', description: 'Equip 3 VaultRelics', xp: 3 }, { name: 'Social Initiate', description: 'Invite a friend to party', xp: 1 }, { name: 'Codex Scholar', description: 'Unlock 5 Lore Echoes', xp: 5 }, ];

export default function VaultAchievements({ achievements = [] }) { const [recent, setRecent] = useState([]); const [playUnlock] = useSound(unlockSfx);

useEffect(() => { const newOnes = allAchievements.filter( (a) => achievements.includes(a.name) && !recent.includes(a.name) ); if (newOnes.length > 0) { newOnes.forEach((a) => playUnlock()); setRecent((prev) => [...prev, ...newOnes.map((a) => a.name)]); } }, [achievements]);

const renderAchievement = (a, idx) => { const unlocked = achievements.includes(a.name); return ( <div key={idx} className={flex flex-col gap-1 p-3 rounded border shadow transition-all duration-300 ${ unlocked ? 'border-yellow-300 bg-[#1e1a08] text-yellow-300 animate-pulse' : 'border-green-900 bg-[#03150f] text-green-500 opacity-50' }} > <div className="flex items-center gap-2 text-sm font-bold"> <Sparkles size={16} /> {a.name} </div> <div className="text-xs">{a.description}</div> </div> ); };

return ( <div className="flex flex-col gap-4"> <h2 className="text-green-300 text-lg font-bold">Achievements</h2> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {allAchievements.map(renderAchievement)} </div> </div> ); }

