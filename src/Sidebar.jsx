// src/Sidebar.jsx import { useEffect, useState } from 'react';

export default function Sidebar({ activeTab, setActiveTab, onXP, TamAI }) { const tabs = [ 'GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'STREAM', 'EDITOR', 'RELICS', 'ACHIEVEMENTS', 'VAULTFEED', 'SYSTEM SETTINGS' ];

const [lastVisited, setLastVisited] = useState(() => localStorage.getItem('lastTab') || 'GAMES');

useEffect(() => { if (activeTab !== lastVisited) { localStorage.setItem('lastTab', activeTab); setLastVisited(activeTab); } }, [activeTab]);

const handleClick = (label) => { setActiveTab(label); onXP(2, Accessed ${label});

if (label === 'SYSTEM SETTINGS') TamAI.speak('Mod protocols unlocked. Adjust with care.');
if (label === 'VAULTBANK') TamAI.speak('VaultChip metrics engaged.');
if (label === 'VAULTFEED') TamAI.speak('Scanning recent echoes...');
if (label === 'STREAM') TamAI.speak('VaultStream panel opened. Broadcasting prep...');
if (label === 'RELICS' && Math.random() > 0.95) TamAI.speak('Did you feel that? A relic stirred.');

};

return ( <div className="flex flex-col gap-3 animate-fadeIn"> {tabs.map((label) => ( <button key={label} onClick={() => handleClick(label)} className={rounded-lg px-4 py-2 text-sm font-bold border border-green-600 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl ${ activeTab === label ? 'bg-green-700 text-white' : 'bg-green-900 text-green-300 hover:bg-green-700' }} > {label} </button> ))} </div> ); }

