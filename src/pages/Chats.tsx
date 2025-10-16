// src/pages/Chats.tsx
import StatusBar from '@/app/StatusBar';
import TabBar from '@/app/TabBar';

export default function Chats() {
  return (
    <div className="flex h-full flex-col bg-[var(--gray-100)]">
      {/* 상단 상태창 */}
      <StatusBar />

      {/* 중간 영역 (백지) */}
      <div className="flex-1 overflow-auto">{/* 여기에 채팅 목록 UI를 만들면 됩니다 */}</div>

      {/* 하단 탭바 */}
      <TabBar />
    </div>
  );
}
