// src/pages/Chats.tsx
import { useState } from 'react';
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/chatrooms/Header';
import Roomsearch from '@/components/chatrooms/Roomsearch';
import BusinessChatList from '@/components/chatrooms/BusinessChatList';
import FriendChatList from '@/components/chatrooms/FriendChatList';

const TAB_STORAGE_KEY = 'chats-active-tab';

export default function Chats() {
  const [activeTab, setActiveTab] = useState<'friend' | 'business'>(() => {
    const saved = localStorage.getItem(TAB_STORAGE_KEY);
    return (saved as 'friend' | 'business') || 'friend';
  });

  const handleTabChange = (tab: 'friend' | 'business') => {
    setActiveTab(tab);
    localStorage.setItem(TAB_STORAGE_KEY, tab);
  };

  return (
    <MenuTab>
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />
      <Roomsearch />

      {/* inline style로 스크롤바 강제 숨김 */}
      <div
        className="flex-1 overflow-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {activeTab === 'business' ? <BusinessChatList /> : <FriendChatList />}
      </div>
    </MenuTab>
  );
}
