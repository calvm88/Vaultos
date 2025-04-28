export default function VaultRelicEquip({ relics }) {
  return (
    <div className="bg-green-900 p-6 rounded-lg mt-4">
      <h2 className="text-green-300 font-bold text-xl mb-4">Vault Relics Equipped</h2>
      {relics.length > 0 ? (
        relics.map((relic, idx) => (
          <div key={idx} className="text-green-100">
            • {relic}
          </div>
        ))
      ) : (
        <div className="text-green-500 italic">No relics equipped.</div>
      )}
    </div>
  );
}
