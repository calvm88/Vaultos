export default function VaultEditorPro() {
  return (
    <div className="bg-green-900 p-6 rounded-lg mt-4">
      <h2 className="text-green-300 font-bold text-xl mb-4">VaultEditor Pro</h2>
      <p className="text-green-100 mb-2">
        Create, edit, and upload your ROMs, mods, or creative projects here!
      </p>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Project Title"
          className="px-4 py-2 rounded bg-black text-green-200 border border-green-600"
        />
        <textarea
          placeholder="Project Description"
          className="px-4 py-2 rounded bg-black text-green-200 border border-green-600"
          rows="4"
        />
        <button className="bg-green-700 hover:bg-green-500 text-black px-6 py-2 rounded-lg font-bold">
          Submit Project
        </button>
      </div>
    </div>
  );
}