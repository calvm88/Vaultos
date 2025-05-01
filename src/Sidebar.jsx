import { useState } from 'react'; import Sidebar from './Sidebar'; import CentralPanel from './CentralPanel'; import VaultLandingPage from './VaultLandingPage';

export default function App() { const [enteredVault, setEnteredVault] = useState(false); const [activeTab, setActiveTab] = useState('GAMES');

const renderPanel = () => { switch (activeTab) { case 'GAMES': return <CentralPanel />; case 'VAULTBANK': return <div className="p-4">VaultBank coming soon!</div>; case 'FRIENDS': return <div className="p-4">Friends feature coming soon!</div>; case 'STORE': return <div className="p-4">Store coming soon!</div>; case 'SYSTEM SETTINGS': return <div className="p-4">Settings coming soon!</div>; default: return <CentralPanel />; } };

return ( <div className="min-h-screen bg-black text-green-400 font-mono"> {enteredVault ? ( <div className="flex h-screen"> <Sidebar setActiveTab={setActiveTab} onXP={() => {}} /> <div className="flex-grow p-4 overflow-auto"> {renderPanel()} </div> </div> ) : ( <VaultLandingPage onEnterVault={() => setEnteredVault(true)} /> )} </div> ); }

