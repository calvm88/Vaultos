import { useEffect, useState } from 'react'; import { Flame, ChevronUp } from 'lucide-react';

export default function VaultXP({ xp, setXP }) { const [level, setLevel] = useState(() => Math.floor(xp / 100)); const [prestige, setPrestige] = useState(() => Math.floor(xp / 1000)); const [progress, setProgress] = useState(() => (xp % 100) / 100); const [animatedXP, setAnimatedXP] = useState(xp);

useEffect(() => { const newLevel = Math.floor(xp / 100); const newPrestige = Math.floor(xp / 1000); const newProgress = (xp % 100) / 100;

setLevel(newLevel);
setPrestige(newPrestige);
setProgress(newProgress);

const increment = xp > animatedXP ? 1 : -1;
const interval = setInterval(() => {
  setAnimatedXP((prev) => {
    const next = prev + increment;
    if ((increment > 0 && next >= xp) || (increment < 0 && next <= xp)) {
      clearInterval(interval);
      return xp;
    }
    return next;
  });
}, 10);

return () => clearInterval(interval);

}, [xp]);

return ( <div className="flex flex-col gap-1"> <div className="text-green-300 text-sm font-bold flex items-center gap-2"> <ChevronUp className="text-green-500" size={14} /> Level {level} {prestige > 0 && ( <span className="ml-2 flex items-center gap-1 text-orange-400"> <Flame size={12} /> Prestige {prestige} </span> )} </div> <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden"> <div className="h-full bg-green-400 transition-all duration-300 ease-in-out" style={{ width: ${progress * 100}% }} ></div> </div> <div className="text-green-500 text-xs"> {animatedXP} XP / Next: {((level + 1) * 100).toLocaleString()} XP </div> </div> ); }

