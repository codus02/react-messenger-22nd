// src/components/chatrooms/BusinessChatList.tsx
import { useChatList } from '@/features/chat/hooks/useChatList';
import ChatRoomItem from './ChatRoomItem';
import { useEffect, useState } from 'react';

export default function BusinessChatList() {
  const allChatRooms = useChatList();
  const [, forceUpdate] = useState(0);

  // (디버깅용) 주기적 리렌더 유지: 필요 없으면 삭제해도 됨
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const businessRooms = allChatRooms.filter((room) => room.type === 'business');

  return (
    <div className="flex flex-col gap-4 bg-[var(--white)] px-4">
      {businessRooms.map((room) => (
        <ChatRoomItem
          key={room.id}
          chatId={room.chatId || undefined}
          profileImage={room.profileImage}
          roomName={room.roomName}
          memberCount={room.memberCount || undefined}
          lastMessage={room.lastMessage}
          time={room.time}
          unreadCount={room.unreadCount}
        />
      ))}
    </div>
  );
}
