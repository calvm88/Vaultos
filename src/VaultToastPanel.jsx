export default function VaultToastPanel({ toasts }) {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-2">
      {toasts.map((toast, idx) => (
        <div
          key={idx}
          className="bg-green-700 text-black font-bold px-4 py-2 rounded-lg shadow-lg animate-pulse"
        >
          {toast}
        </div>
      ))}
    </div>
  );
}
