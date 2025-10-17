// src/pages/Chats.tsx
import { useState } from 'react';
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/chatrooms/Header';
import Roomsearch from '@/components/chatrooms/Roomsearch';

export default function Chats() {
  const [activeTab, setActiveTab] = useState<'friend' | 'business'>('friend');

  return (
    <MenuTab>
      {/* 채팅 목록 상단바 */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 검색창 */}
      <Roomsearch />

      {/* 채팅 목록 영역 (빈 공간) */}
      <div className="flex-1 bg-[var(--gray-100)]">
        {/* 나중에 FriendChatList / BusinessChatList 컴포넌트 추가 예정 */}
      </div>
    </MenuTab>
  );
}
