// src/CentralPanel.jsx import { useEffect, useState } from 'react'; import VaultXP from './VaultXP'; import VaultFeed from './VaultFeed'; import FriendsList from './FriendsList'; import VaultChipSim from './VaultChipSim'; import VaultAchievements from './VaultAchievements'; import VaultEditorPro from './VaultEditorPro'; import VaultStreamPanel from './VaultStreamPanel'; import VaultRelicEquip from './VaultRelicEquip'; import VaultToastPanel from './VaultToastPanel'; import useSound from 'use-sound'; import startupSound from '../assets/sfx/startup.mp3';

export default function CentralPanel({ activeTab }) { const [vaultFeed, setVaultFeed] = useState(() => JSON.parse(localStorage.getItem('vaultFeed')) || []); const [xp, setXP] = useState(() => parseInt(localStorage.getItem('xp')) || 0); const [friends, setFriends] = useState(['RetroKid', 'Gamer123']); const [partyInvites, setPartyInvites] = useState([]); const [achievements, setAchievements] = useState(() => JSON.parse(localStorage.getItem('achievements')) || []); const [toasts, setToasts] = useState(() => JSON.parse(localStorage.getItem('toasts')) || []); const [relics, setRelics] = useState(() => JSON.parse(localStorage.getItem('relics')) || []); const [play] = useSound(startupSound);

useEffect(() => { play(); }, []); useEffect(() => { localStorage.setItem('vaultFeed', JSON.stringify(vaultFeed)); }, [vaultFeed]); useEffect(() => { localStorage.setItem('xp', xp.toString()); }, [xp]); useEffect(() => { localStorage.setItem('achievements', JSON.stringify(achievements)); }, [achievements]); useEffect(() => { localStorage.setItem('toasts', JSON.stringify(toasts)); }, [toasts]); useEffect(() => { localStorage.setItem('relics', JSON.stringify(relics)); }, [relics]);

function gainXP(amount, reason) { setXP(prev => prev + amount); setVaultFeed(prev => [...prev, { type: 'XP', message: ${amount} XP: ${reason}, amount, time: Date.now() }]); setToasts(prev => [...prev, ${amount} XP!]); if (xp + amount >= 100 && !achievements.includes('First Level Up')) { setAchievements(prev => [...prev, 'First Level Up']); setToasts(prev => [...prev, 'Achievement: First Level Up!']); setVaultFeed(prev => [...prev, { type: 'ACHIEVEMENT', message: 'Unlocked: First Level Up!', time: Date.now() }]); } }

function inviteFriend(friend) { setPartyInvites(prev => [...prev, friend]); setVaultFeed(prev => [...prev, { type: 'FRIEND', message: Party invite sent to ${friend}, time: Date.now() }]); }

function unlockRelic(name) { setRelics(prev => [...prev, name]); setVaultFeed(prev => [...prev, { type: 'RELIC', message: Relic equipped: ${name}, time: Date.now() }]); }

return ( <div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto relative"> <VaultToastPanel toasts={toasts.slice(-3)} /> <VaultXP xp={xp} setXP={setXP} />

{activeTab === 'GAMES' && <div className="text-green-400 text-xl">Game Library coming soon!</div>}
  {activeTab === 'VAULTBANK' && <VaultChipSim />}
  {activeTab === 'FRIENDS' && <FriendsList friends={friends} onInvite={inviteFriend} />}
  {activeTab === 'STORE' && <VaultRelicEquip relics={relics} />}
  {activeTab === 'SYSTEM SETTINGS' && <div className="text-green-300">Settings panel coming soon!</div>}
  {activeTab === 'STREAM' && <VaultStreamPanel />}
  {activeTab === 'EDITOR' && <VaultEditorPro />}
  {activeTab === 'RELICS' && <VaultRelicEquip relics={relics} />}
  {activeTab === 'ACHIEVEMENTS' && <VaultAchievements achievements={achievements} />}
  {activeTab === 'VAULTFEED' && <VaultFeed feed={vaultFeed} />}
</div>

); }

