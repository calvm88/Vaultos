import { useState, useEffect } from 'react';

export default function VaultXP({ xp, setXP }) {
  const level = Math.floor(xp / 100) + 1;

  useEffect(() => {
    localStorage.setItem('vault_xp', xp);
  }, [xp]);

  return (
    <div className="bg-green-900 rounded-lg p-4 mb-4">
      <h2 className="text-green-300 font-bold mb-2">XP Progress</h2>
      <p className="text-green-100">Level {level} — {xp} XP</p>
    </div>
  );
}
