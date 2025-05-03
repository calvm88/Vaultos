// src/VaultChipSim.jsx import { useEffect, useState } from 'react'; import { Flame, Thermometer, Activity, ShieldAlert } from 'lucide-react';

export default function VaultChipSim() { const [chipTemp, setChipTemp] = useState(42); const [chipStability, setChipStability] = useState(100); const [log, setLog] = useState([]);

useEffect(() => { const interval = setInterval(() => { const tempChange = Math.floor(Math.random() * 5); const newTemp = chipTemp + tempChange; const newStability = Math.max(0, chipStability - Math.floor(Math.random() * 3));

setChipTemp(newTemp);
  setChipStability(newStability);

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const newEntry = `${now} - Chip temp ${newTemp}°C / Stability ${newStability}%`;

  setLog((prev) => [...prev.slice(-29), newEntry]);
}, 4000);

return () => clearInterval(interval);

}, [chipTemp, chipStability]);

return ( <div className="bg-[#0e1e17] border border-green-600 p-4 rounded-xl shadow-lg animate-fadeIn"> <h2 className="text-green-300 text-lg font-bold mb-4 flex items-center gap-2"> <Flame className="text-red-400" size={20} /> VaultChip System </h2> <div className="grid grid-cols-2 gap-4 mb-4"> <div className="flex items-center gap-2"> <Thermometer className="text-orange-400" size={18} /> <span className="text-green-200">Temp:</span> <span className="font-bold text-yellow-300">{chipTemp}°C</span> </div> <div className="flex items-center gap-2"> <Activity className="text-cyan-300" size={18} /> <span className="text-green-200">Stability:</span> <span className="font-bold text-purple-300">{chipStability}%</span> </div> </div> {chipTemp >= 80 && ( <div className="text-sm text-red-500 bg-red-900 px-2 py-1 rounded mb-2 flex items-center gap-1"> <ShieldAlert size={14} /> WARNING: VaultChip Overheating </div> )} {chipStability <= 25 && ( <div className="text-sm text-orange-400 bg-orange-900 px-2 py-1 rounded mb-2 flex items-center gap-1"> <ShieldAlert size={14} /> ALERT: VaultChip Stability Critically Low </div> )} <div className="bg-[#091913] p-3 rounded text-green-200 text-xs h-40 overflow-y-auto border border-green-700"> {log.map((entry, i) => ( <div key={i} className="hover:text-green-400">• {entry}</div> ))} </div> </div> ); }

