// src/components/chatrooms/BusinessChatList.tsx
import ChatRoomItem from './ChatRoomItem';

export default function BusinessChatList() {
  const chatRooms = [
    {
      id: 1,
      chatId: undefined, // 추가
      profileImage: 'ceos-notice',
      roomName: 'CEOS 22기 공지방',
      memberCount: 65,
      lastMessage: '[2주차 세션 공지]\n...',
      time: '오후 12:30',
      unreadCount: 12,
    },
    {
      id: 2,
      chatId: 'c_ceos', // 추가 - 기존 채팅창 ID
      profileImage: 'ceos-chat',
      roomName: 'CEOS 22기 잡담방',
      memberCount: 65,
      lastMessage: '안녕하세요 다들 만나서 반갑습니다!!\n다들 자기소개 부탁드릴게요~! 지...',
      time: '오전 10:35',
      unreadCount: 0,
    },
    {
      id: 3,
      chatId: undefined, // 추가
      profileImage: 'ceos-design',
      roomName: 'CEOS 22기 디자인파트',
      memberCount: 12,
      lastMessage: '세미나 자료 공유드립니다.',
      time: '9월 14일',
      unreadCount: 0,
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-[var(--white)] px-4 pt-4">
      {chatRooms.map((room) => (
        <ChatRoomItem
          key={room.id}
          chatId={room.chatId} // 추가
          profileImage={room.profileImage}
          roomName={room.roomName}
          memberCount={room.memberCount}
          lastMessage={room.lastMessage}
          time={room.time}
          unreadCount={room.unreadCount}
        />
      ))}
    </div>
  );
}
