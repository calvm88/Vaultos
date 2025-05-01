import { useEffect } from 'react';

export default function Sidebar({ activeTab, setActiveTab }) { const tabs = [ 'GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'SYSTEM SETTINGS', 'STREAM', 'EDITOR', 'RELICS', 'ACHIEVEMENTS', 'VAULTFEED' ];

useEffect(() => { const stored = localStorage.getItem('activeTab'); if (stored) setActiveTab(stored); }, []);

const handleTabClick = (tab) => { setActiveTab(tab); localStorage.setItem('activeTab', tab); };

return ( <div className="flex flex-col space-y-2 animate-fadeIn"> {tabs.map((tab) => ( <button key={tab} onClick={() => handleTabClick(tab)} className={px-4 py-2 text-left rounded shadow-sm transition-all duration-200 font-bold text-sm tracking-wide ${activeTab === tab ? 'bg-green-800 text-white scale-105 shadow-md' : 'bg-green-950 text-green-400 hover:bg-green-800 hover:text-white hover:scale-105'}} > {tab} </button> ))} </div> ); }

