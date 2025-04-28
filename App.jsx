import { useState } from 'react';
import Sidebar from './Sidebar';
import CentralPanel from './CentralPanel';
import VaultLandingPage from './VaultLandingPage';

export default function App() {
  const [enteredVault, setEnteredVault] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {enteredVault ? (
        <div className="flex h-screen">
          <Sidebar setActiveTab={() => {}} onXP={() => {}} />
          <CentralPanel />
        </div>
      ) : (
        <VaultLandingPage onEnterVault={() => setEnteredVault(true)} />
      )}
    </div>
  );
}