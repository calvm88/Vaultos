import { useState } from 'react';

export default function VaultLandingPage({ onEnterVault }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-green-300 font-mono">
      {showIntro ? (
        <div className="text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to VaultOS</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Guard the past. Hack the future. Build your legacy.
          </p>
          <button
            onClick={() => setShowIntro(false)}
            className="mt-6 px-6 py-3 rounded bg-green-600 hover:bg-green-500 text-black text-xl font-bold transition-all"
          >
            Enter Vault Alpha
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-green-400 text-xl">Initializing VaultOS...</p>
          <button
            onClick={onEnterVault}
            className="mt-4 px-5 py-2 rounded bg-green-700 hover:bg-green-500 text-black font-bold"
          >
            Launch Vault
          </button>
        </div>
      )}
    </div>
  );
}
