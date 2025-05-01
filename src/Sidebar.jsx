import { useEffect } from 'react'; import TamAI from './TamAI';

const tabs = [ 'GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'SYSTEM SETTINGS', 'STREAM', 'EDITOR', 'RELICS', 'ACHIEVEMENTS', 'VAULTFEED' ];

export default function Sidebar({ activeTab, setActiveTab, onXP, unreadFeed }) { useEffect(() => { const lastTab = localStorage.getItem('lastActiveTab'); if (lastTab) setActiveTab(lastTab); }, [setActiveTab]);

function handleTabClick(label) { setActiveTab(label); localStorage.setItem('lastActiveTab', label); onXP(2, Switched to ${label});

if (label === 'SYSTEM SETTINGS') TamAI.speak('Adjusting Vault protocols.');
if (label === 'VAULTCHIP') TamAI.speak('Analyzing core VaultChip.');
if (label === 'VAULTFEED') TamAI.speak('Opening memory scroll.');

}

return ( <div className="flex flex-col gap-3"> {tabs.map(label => ( <button key={label} onClick={() => handleTabClick(label)} className={rounded px-4 py-2 text-sm font-bold transition duration-300 ease-in-out ${activeTab === label ? 'bg-green-700 text-white shadow-lg' : 'bg-green-900 text-green-300 hover:bg-green-700'}} > {label} {label === 'VAULTFEED' && unreadFeed > 0 && ( <span className="ml-2 text-xs text-green-400 animate-pulse">({unreadFeed})</span> )} </button> ))} </div> ); }

