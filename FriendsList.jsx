export default function FriendsList({ friends, onInvite }) {
  return (
    <div className="bg-green-900 p-4 rounded-lg">
      <h2 className="text-green-300 font-bold mb-2">Friends Online</h2>
      {friends.length > 0 ? (
        friends.map((friend, idx) => (
          <div key={idx} className="flex justify-between items-center text-green-100 mb-2">
            <span>{friend}</span>
            <button
              onClick={() => onInvite(friend)}
              className="px-2 py-1 bg-green-600 hover:bg-green-500 text-black rounded text-xs"
            >
              Invite
            </button>
          </div>
        ))
      ) : (
        <div className="text-green-500 italic">No friends online yet.</div>
      )}
    </div>
  );
}