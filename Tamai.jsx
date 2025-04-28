import { useState, useEffect } from 'react';

const moodColor = {
  happy: 'bg-green-500',
  idle: 'bg-green-300',
  alert: 'bg-red-500',
};

export default function TamAI({ mood = 'idle', message = "Vault Systems Ready." }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-black text-xl shadow-xl ${moodColor[mood]} transition-colors duration-500`}>
        Tam
      </div>
      <div className="text-center text-green-300 italic">{message}</div>
    </div>
  );
}