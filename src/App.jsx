import { useEffect, useState } from 'react'; import TamAI from './TamAI'; import Sidebar from './Sidebar'; import CentralPanel from './CentralPanel';

export default function App() { const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'GAMES');

useEffect(() => { localStorage.setItem('activeTab', activeTab); }, [activeTab]);

return ( <div className="min-h-screen bg-black text-green-400 font-mono flex"> <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> <main
className="flex-1 transition-all duration-500 ease-in-out opacity-0 animate-fadeIn"
key={activeTab}> <TamAI /> <CentralPanel activeTab={activeTab} /> </main> </div> ); }

