import { useEffect } from 'react'; import Sidebar from './Sidebar'; import CentralPanel from './CentralPanel'; import TamAI from './TamAI';

export default function App() { useEffect(() => { document.body.classList.add('bg-black'); }, []);

return ( <div className="min-h-screen flex flex-row text-green-300 font-mono"> <div className="w-1/5 bg-[#02160f] p-4 border-r border-green-800 shadow-lg transition-all duration-300 ease-in-out"> <Sidebar /> </div> <div className="w-4/5 p-4 animate-fadeIn"> <CentralPanel /> </div> <div className="fixed bottom-4 right-4"> <TamAI /> </div> </div> ); }


