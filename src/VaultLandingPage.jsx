import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VaultLandingPage({ onEnterVault }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col justify-center items-center text-green-300 font-mono p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showIntro ? (
        <motion.div
          className="text-center space-y-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to VaultOS</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Guard the past. Hack the future. Build your legacy.
          </p>
          <motion.button
            onClick={() => setShowIntro(false)}
            className="mt-6 px-6 py-3 rounded bg-green-600 hover:bg-green-500 text-black text-xl font-bold transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Enter Vault Alpha
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p className="text-green-400 text-xl">Initializing VaultOS...</p>
          <motion.button
            onClick={onEnterVault}
            className="mt-4 px-5 py-2 rounded bg-green-700 hover:bg-green-500 text-black font-bold"
            whileTap={{ scale: 0.95 }}
          >
            Launch Vault
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
