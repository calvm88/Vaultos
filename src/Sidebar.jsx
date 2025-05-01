// src/Sidebar.jsx import { useEffect, useState } from 'react';

const TABS = [ 'GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'SYSTEM SETTINGS', 'STREAM', 'EDITOR', 'RELICS', 'ACHIEVEMENTS', 'VAULTFEED' ];

export default function Sidebar({ activeTab, setActiveTab }) { const [selected, setSelected] = useState(() => localStorage.getItem('activeTab') || 'GAMES');

useEffect(() => { setActiveTab(selected); localStorage.setItem('activeTab', selected); }, [selected]);

return ( <div className="flex flex-col space-y-2"> {TABS.map(tab => ( <button key={tab} className={px-4 py-2 text-left border rounded transition-all duration-300 ${ selected === tab ? 'bg-green-700 text-white font-bold shadow-lg' : 'bg-green-100 text-green-800 hover:bg-green-300' }} onClick={() => setSelected(tab)} > {tab} </button> ))} </div> ); }

