// src/types/chat.ts
export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type TextMessage = {
  id: string;
  kind: 'text';
  chatId: string;
  userId: string;
  text: string;
  createdAt: string;
  reaction?: '❤️' | null; // 추가: 하트 반응
};

export type ChatListItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatarUrl: string;
  type: 'friend' | 'business';
};
