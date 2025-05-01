// src/App.jsx import { useState } from 'react'; import Sidebar from './Sidebar'; import CentralPanel from './CentralPanel'; import VaultLandingPage from './VaultLandingPage';

export default function App() { const [enteredVault, setEnteredVault] = useState(false); const [activeTab, setActiveTab] = useState('XP');

return ( <div className="min-h-screen bg-black text-green-400 font-mono"> {enteredVault ? ( <div className="flex h-screen"> <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} /> <CentralPanel activeTab={activeTab} /> </div> ) : ( <VaultLandingPage onEnterVault={() => setEnteredVault(true)} /> )} </div> ); }

