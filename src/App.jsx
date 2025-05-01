import { useState } from 'react';
import Sidebar from './Sidebar';
import CentralPanel from './CentralPanel';
import VaultLandingPage from './VaultLandingPage';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [enteredVault, setEnteredVault] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <AnimatePresence mode="wait">
        {enteredVault ? (
          <div key="vault" className="flex h-screen">
            <Sidebar setActiveTab={() => {}} onXP={() => {}} />
            <CentralPanel />
          </div>
        ) : (
          <VaultLandingPage key="landing" onEnterVault={() => setEnteredVault(true)} />
        )}
      </AnimatePresence>
    </div>
  );
}
