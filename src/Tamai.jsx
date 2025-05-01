// src/components/TamAI.jsx import React, { useEffect, useState } from 'react'; import tamIdle from '../assets/tam/tam_idle.gif'; import tamTalk from '../assets/tam/tam_talk.gif'; import tamError from '../assets/tam/tam_error.gif'; import tamSuccess from '../assets/tam/tam_success.gif';

const moodMap = { idle: tamIdle, talk: tamTalk, error: tamError, success: tamSuccess, };

export default function TamAI({ message, mood = 'idle' }) { const [currentMood, setCurrentMood] = useState(mood); const [displayText, setDisplayText] = useState('');

useEffect(() => { setCurrentMood(mood); setDisplayText(''); let i = 0; const interval = setInterval(() => { if (message && i < message.length) { setDisplayText((prev) => prev + message[i]); i++; } else { clearInterval(interval); } }, 35); return () => clearInterval(interval); }, [message, mood]);

return ( <div className="flex flex-col items-center text-center gap-2 p-2"> <img src={moodMap[currentMood] || tamIdle} alt="TamAI" className="w-24 h-24 drop-shadow-xl transition-all duration-300" /> <div className="text-green-300 bg-black/70 rounded-lg p-2 text-sm font-mono w-64 min-h-[48px]"> {displayText} </div> </div> ); }


