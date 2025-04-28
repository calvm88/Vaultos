export default function VaultAchievements({ achievements }) {
  return (
    <div className="bg-green-900 p-4 rounded-lg mt-4">
      <h2 className="text-green-300 font-bold mb-2">Achievements</h2>
      {achievements.length > 0 ? (
        achievements.map((ach, idx) => (
          <div key={idx} className="text-green-100 text-sm">
            • {ach}
          </div>
        ))
      ) : (
        <div className="text-green-500 italic">No achievements unlocked yet.</div>
      )}
    </div>
  );
}