// src/components/chatrooms/FriendChatList.tsx
import ChatRoomItem from './ChatRoomItem';

export default function FriendChatList() {
  const chatRooms = [
    {
      id: 1,
      chatId: undefined,
      profileImage: 'friend-chat-1',
      roomName: '세오스',
      memberCount: undefined,
      lastMessage: '오늘 우리 어디서 만나?',
      time: '오전 10:30',
      unreadCount: 4,
    },
    {
      id: 2,
      chatId: undefined,
      profileImage: 'friend-chat-2',
      roomName: '세오스 생일파티',
      memberCount: 8,
      lastMessage: '케이크는 미리 예약했고 파티룸도 예\n약 완료입니당~!',
      time: '오후 6:30',
      unreadCount: 0,
    },
    {
      id: 3,
      chatId: undefined,
      profileImage: 'friend-chat-3',
      roomName: '한강가자',
      memberCount: 12,
      lastMessage: '26일 저녁 다들 어때?',
      time: '9월 17일',
      unreadCount: 356,
    },
    {
      id: 4,
      chatId: undefined,
      profileImage: 'friend-chat-4',
      roomName: '오스세',
      memberCount: undefined,
      lastMessage: '지금 모햅',
      time: '25.07.16',
      unreadCount: 0,
    },
    {
      id: 5,
      chatId: undefined,
      profileImage: 'friend-chat-4',
      roomName: '오스세',
      memberCount: undefined,
      lastMessage: '허거덩~!',
      time: '25.04.08',
      unreadCount: 2,
    },
    {
      id: 6,
      chatId: undefined,
      profileImage: 'friend-chat-4',
      roomName: '오스세',
      memberCount: undefined,
      lastMessage: '수강신청 어떻게 됐어?',
      time: '24.12.30',
      unreadCount: 0,
    },
    {
      id: 7,
      chatId: undefined,
      profileImage: 'friend-chat-4',
      roomName: '오스세',
      memberCount: undefined,
      lastMessage: '진짜???',
      time: '24.09.28',
      unreadCount: 0,
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-[var(--white)] px-4">
      {chatRooms.map((room) => (
        <ChatRoomItem
          key={room.id}
          chatId={room.chatId}
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
