// src/components/chatrooms/BusinessChatList.tsx
import { useChatList } from '@/features/chat/hooks/useChatList';
import ChatRoomItem from './ChatRoomItem';
import { useEffect, useState } from 'react';

type Props = {
  searchQuery?: string;
};

export default function BusinessChatList({ searchQuery = '' }: Props) {
  const allChatRooms = useChatList();
  const [, forceUpdate] = useState(0);

  // 추가: 주기적으로 강제 새로고침 (디버깅용)
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((prev) => prev + 1);
    }, 1000); // 1초마다 체크

    return () => clearInterval(interval);
  }, []);

  const businessRooms = allChatRooms.filter((room) => room.type === 'business');

  const filteredRooms = businessRooms.filter((room) => {
    if (!searchQuery) return true;
    return room.roomName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-4 bg-[var(--white)] px-4">
      {filteredRooms.length > 0
        ? filteredRooms.map((room) => (
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
          ))
        : searchQuery && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-[16px] text-[var(--gray-500)]">'{searchQuery}' 검색 결과가 없습니다</p>
            </div>
          )}
    </div>
  );
}
