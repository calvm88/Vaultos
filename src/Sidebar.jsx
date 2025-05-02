// src/Sidebar.jsx import { useEffect, useState } from 'react'; import useSound from 'use-sound'; import clickSfx from '../assets/sfx/select.mp3';

const tabs = [ { label: 'GAMES', badge: '' }, { label: 'VAULTBANK', badge: '' }, { label: 'FRIENDS', badge: 'NEW' }, { label: 'STORE', badge: '' }, { label: 'SYSTEM SETTINGS', badge: '' }, { label: 'STREAM', badge: '' }, { label: 'EDITOR', badge: '' }, { label: 'RELICS', badge: '' }, { label: 'ACHIEVEMENTS', badge: '' }, { label: 'VAULTFEED', badge: '' } ];

export default function Sidebar({ activeTab, setActiveTab, onXP, TamAI }) { const [visited, setVisited] = useState(() => JSON.parse(localStorage.getItem('visitedTabs')) || []); const [play] = useSound(clickSfx);

useEffect(() => { localStorage.setItem('visitedTabs', JSON.stringify(visited)); }, [visited]);

const handleClick = (label) => { play(); setActiveTab(label); if (!visited.includes(label)) { onXP(10, Discovered ${label}); setVisited([...visited, label]); } else { onXP(1, Accessed ${label}); } if (TamAI) { const phrase = Accessing ${label} panel...; TamAI.speak && TamAI.speak(phrase); } };

return ( <div className="flex flex-col gap-2"> {tabs.map(({ label, badge }) => ( <button key={label} onClick={() => handleClick(label)} className={flex justify-between items-center rounded-lg px-4 py-2 text-sm font-bold border border-green-600 shadow transition-colors duration-300 ${ activeTab === label ? 'bg-green-700 text-white' : 'bg-green-900 hover:bg-green-700' }} > <span>{label}</span> {badge && <span className="ml-2 text-xs bg-yellow-300 text-black px-2 py-0.5 rounded-full font-extrabold">{badge}</span>} </button> ))} </div> ); }

