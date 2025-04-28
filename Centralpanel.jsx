import { useState } from 'react';
import VaultXP from './VaultXP';
import VaultFeed from './VaultFeed';
import FriendsList from './FriendsList';
import VaultChipSim from './VaultChipSim';
import VaultAchievements from './VaultAchievements';
import VaultEditorPro from './VaultEditorPro';
import VaultStreamPanel from './VaultStreamPanel';
import VaultRelicEquip from './VaultRelicEquip';
import VaultToastPanel from './VaultToastPanel';

export default function CentralPanel() {
  const [activeTab, setActiveTab] = useState('GAMES');
  const [vaultFeed, setVaultFeed] = useState([]);
  const [xp, setXP] = useState(0);
  const [friends, setFriends] = useState(['RetroKid', 'Gamer123']);
  const [partyInvites, setPartyInvites] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [relics, setRelics] = useState([]);

  function gainXP(amount, reason) {
    setXP(prev => prev + amount);
    setVaultFeed(prev => [...prev, `+${amount} XP: ${reason}`]);
    setToasts(prev => [...prev, `+${amount} XP!`]);
    if (xp + amount >= 100 && !achievements.includes('First Level Up')) {
      setAchievements(prev => [...prev, 'First Level Up']);
      setToasts(prev => [...prev, 'Achievement: First Level Up!']);
    }
  }

  function inviteFriend(friend) {
    setPartyInvites(prev => [...prev, friend]);
    setVaultFeed(prev => [...prev, `Party invite sent to ${friend}`]);
  }

  function unlockRelic(name) {
    setRelics(prev => [...prev, name]);
    setVaultFeed(prev => [...prev, `Relic equipped: ${name}`]);
    setToasts(prev => [...prev, `Relic Equipped: ${name}`]);
  }

  return (
    <div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto relative">
      <VaultToastPanel toasts={toasts.slice(-3)} />
      <VaultXP xp={xp} setXP={setXP} />

      {activeTab === 'GAMES' && (
        <div className="text-green-300">Game Library coming soon!</div>
      )}
      {activeTab === 'VAULTBANK' && (
        <VaultChipSim />
      )}
      {activeTab === 'FRIENDS' && (
        <FriendsList friends={friends} onInvite={inviteFriend} />
      )}
      {activeTab === 'STORE' && (
        <VaultRelicEquip relics={relics} />
      )}
      {activeTab === 'SYSTEM SETTINGS' && (
        <div className="text-green-300">Settings panel coming soon!</div>
      )}
      {activeTab === 'STREAM' && (
        <VaultStreamPanel />
      )}
      {activeTab === 'EDITOR' && (
        <VaultEditorPro />
      )}
      {activeTab === 'RELICS' && (
        <VaultRelicEquip relics={relics} />
      )}
      {activeTab === 'ACHIEVEMENTS' && (
        <VaultAchievements achievements={achievements} />
      )}
      {activeTab === 'VAULTFEED' && (
        <VaultFeed feed={vaultFeed} />
      )}
    </div>
  );
}