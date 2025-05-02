import { useState } from 'react'; import TamAI from './TamAI';

const tabs = [ { label: 'GAMES', icon: '🎮' }, { label: 'VAULTBANK', icon: '🏦' }, { label: 'FRIENDS', icon: '🧑‍🤝‍🧑' }, { label: 'STORE', icon: '🛒' }, { label: 'SYSTEM SETTINGS', icon: '⚙️' }, { label: 'STREAM', icon: '📺' }, { label: 'EDITOR', icon: '✏️' }, { label: 'RELICS', icon: '💠' }, { label: 'ACHIEVEMENTS', icon: '🏆' }, { label: 'VAULTFEED', icon: '📜' } ];

export default function Sidebar({ activeTab, setActiveTab, onXP, setVaultFeed }) { const [skins, setSkins] = useState( JSON.parse(localStorage.getItem('tabSkins')) || {} );

const handleTabClick = (label) => { setActiveTab(label); onXP(3, Accessed ${label}); setVaultFeed((prev) => [...prev, { type: 'SYSTEM', message: Switched to ${label} }]);

if (label === 'SYSTEM SETTINGS') TamAI.speak('Adjusting Vault protocols.');
else if (label === 'STREAM') TamAI.speak('VaultStream mode activated.');
else if (label === 'EDITOR') TamAI.speak('Opening VaultEditor Pro...');
else if (label === 'RELICS') TamAI.speak('Equipping new VaultRelics.');
else TamAI.speak(`Accessing ${label}`);

};

const getTabClasses = (label) => { const isActive = label === activeTab; const skinClass = skins[label] || ''; return rounded-lg px-4 py-2 mb-2 text-sm font-bold border border-green-600 transition-all duration-300 shadow-md cursor-pointer text-left hover:bg-green-800 ${ isActive ? 'bg-green-700 text-white' : 'bg-green-900 text-green-300' } ${skinClass}; };

return ( <div className="flex flex-col"> {tabs.map(({ label, icon }) => ( <button key={label} onClick={() => handleTabClick(label)} className={getTabClasses(label)} > {icon} {label} </button> ))} </div> ); }

