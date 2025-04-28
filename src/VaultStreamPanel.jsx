// src/VaultStreamPanel.jsx

import { useState } from 'react';

export default function VaultStreamPanel({ onXP, onFeed }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedClips, setRecordedClips] = useState([]);

  const startRecording = () => {
    setIsRecording(true);
    onFeed(prev => [...prev, 'VaultStream: Recording started...']);
  };

  const stopRecording = () => {
    setIsRecording(false);
    const newClip = `Clip-${Date.now()}`;
    setRecordedClips(prev => [...prev, newClip]);
    onFeed(prev => [...prev, `VaultStream: Clip saved (${newClip})`]);
    onXP(prev => prev + 10, 'Recorded Vault activity');
  };

  return (
    <div className="flex flex-col gap-4 p-4 text-green-300">
      <h2 className="text-xl font-bold">VaultStream Recorder</h2>

      {isRecording ? (
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded font-bold"
          onClick={stopRecording}
        >
          Stop Recording
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded font-bold"
          onClick={startRecording}
        >
          Start Recording
        </button>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Saved Clips:</h3>
        {recordedClips.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1">
            {recordedClips.map((clip, index) => (
              <li key={index} className="text-green-200">
                {clip}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-500 italic">No clips recorded yet.</p>
        )}
      </div>
    </div>
  );
}
