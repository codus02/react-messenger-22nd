// src/pages/Chats.tsx
import StatusBar from '@/app/StatusBar';

export default function Chats() {
  return (
    <div className="flex h-full flex-col">
      {/* ↑ Fragment → div flex container로 변경 */}
      <StatusBar />
      {/* 나머지 빈 공간 */}
      <div className="flex-1 bg-[var(--gray-100)]">{/* 여기에 채팅 목록 UI를 만들 예정 */}</div>
    </div>
  );
}
