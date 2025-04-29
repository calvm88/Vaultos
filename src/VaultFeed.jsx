export default function VaultFeed({ feed }) {
  return (
    <div className="flex flex-col gap-2 bg-[#06221a] border border-green-600 p-4 rounded-xl overflow-y-auto max-h-[400px]">
      <h2 className="text-green-300 text-lg mb-2 font-bold">VaultFeed Log</h2>
      {feed.length > 0 ? (
        feed.map((entry, idx) => (
          <div key={idx} className="text-green-100 text-xs">
            • {entry}
          </div>
        ))
      ) : (
        <div className="text-green-500 italic">No Vault events yet.</div>
      )}
    </div>
  );
}
