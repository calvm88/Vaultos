export default function Sidebar({ setActiveTab, onXP }) {
  const tabs = ['GAMES', 'VAULTBANK', 'FRIENDS', 'STORE', 'SYSTEM SETTINGS'];

  return (
    <div className="w-1/5 bg-green-900 p-4 space-y-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            onXP(5, `Switched to ${tab}`);
          }}
          className="w-full bg-green-700 hover:bg-green-600 text-black py-2 rounded-lg font-bold"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}