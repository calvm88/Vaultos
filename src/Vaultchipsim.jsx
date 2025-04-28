import { useState, useEffect } from 'react';

export default function VaultChipSim() {
  const [health, setHealth] = useState(100);

  useEffect(() => {
    const decay = setInterval(() => {
      setHealth(h => Math.max(0, h - Math.random() * 2));
    }, 5000);

    return () => clearInterval(decay);
  }, []);

  return (
    <div className="bg-green-900 p-4 rounded-lg mt-4">
      <h2 className="text-green-300 font-bold mb-2">VaultChip Core Health</h2>
      <p className={`font-bold ${health < 30 ? 'text-red-500' : 'text-green-100'}`}>
        {health.toFixed(1)}%
      </p>
    </div>
  );
}
