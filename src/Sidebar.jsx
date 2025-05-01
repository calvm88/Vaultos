import { useEffect } from 'react'; import TamAI from './TamAI';

const tabs = [ 'GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'SYSTEM SETTINGS', 'STREAM', 'EDITOR', 'RELICS', 'ACHIEVEMENTS', 'VAULTFEED' ];

export default function Sidebar({ activeTab, setActiveTab, onXP, unreadFeed }) { useEffect(() => { const lastTab = localStorage.getItem('lastActiveTab'); if (lastTab) { setActiveTab(lastTab); } }, []);

const handleTabClick = (label) => { setActiveTab(label); localStorage.setItem('lastActiveTab', label); onXP(2, Switched to ${label});

if (label === 'SYSTEM SETTINGS') TamAI.speak('Adjusting Vault protocols.');
if (label === 'VAULTCHIP') TamAI.speak('Analyzing core VaultChip.');
if (label === 'VAULTFEED') TamAI.speak('Opening memory scroll.');

};

return ( <div className="flex flex-col gap-3"> {tabs.map(label => ( <button key={label} onClick={() => handleTabClick(label)} className={rounded-lg px-4 py-2 text-sm font-bold border border-green-600 shadow transition-all duration-300 ease-in-out relative ${activeTab === label ? 'bg-green-700 text-white' : 'bg-green-900 hover:bg-green-700'} } title={Go to ${label}} > {label} {label === 'VAULTFEED' && unreadFeed && ( <span className="absolute top-1 right-2 w-2 h-2 bg-red-400 rounded-full animate-ping"></span> )} </button> ))} </div> ); }

