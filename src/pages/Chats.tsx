// src/pages/Chats.tsx
import { useState } from 'react';
import StatusBar from '@/app/StatusBar';
import Header from '@/components/chatrooms/Header';
import Roomsearch from '@/components/chatrooms/Roomsearch';

export default function Chats() {
  const [activeTab, setActiveTab] = useState<'friend' | 'business'>('friend');

  return (
    <div className="flex h-full flex-col">
      {/* 상태창 */}
      <StatusBar />

      {/* 채팅 목록 상단바 - props 전달 */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 검색창 */}
      <Roomsearch />

      {/* 채팅 목록 영역 */}
      <div className="flex-1 overflow-auto bg-[var(--gray-100)]"></div>
    </div>
  );
}
