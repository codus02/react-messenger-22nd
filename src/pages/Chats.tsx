// src/pages/Chats.tsx
import { useState, useEffect } from 'react';
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/chatrooms/Header';
import Roomsearch from '@/components/chatrooms/Roomsearch';
import BusinessChatList from '@/components/chatrooms/BusinessChatList';

const TAB_STORAGE_KEY = 'chats-active-tab';

export default function Chats() {
  // localStorage에서 마지막 탭 복원 (기본값: 'friend')
  const [activeTab, setActiveTab] = useState<'friend' | 'business'>(() => {
    const saved = localStorage.getItem(TAB_STORAGE_KEY);
    return (saved as 'friend' | 'business') || 'friend';
  });

  // 탭 변경 시 localStorage에 저장
  const handleTabChange = (tab: 'friend' | 'business') => {
    setActiveTab(tab);
    localStorage.setItem(TAB_STORAGE_KEY, tab);
  };

  return (
    <MenuTab>
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />
      <Roomsearch />

      {/* 채팅 목록 영역 */}
      <div className="flex-1 overflow-auto bg-[var(--gray-100)]">
        {activeTab === 'business' ? (
          <BusinessChatList />
        ) : (
          <div className="p-4 text-[var(--gray-500)]">친구 채팅 목록 (준비중)</div>
        )}
      </div>
    </MenuTab>
  );
}
