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
  reaction?: '❤️' | null;
};

export type Message = TextMessage;
export type Id = string;

// ChatContext 전용
export type Conversation = {
  id: string;
  title: string;
  memberCount: number;
  participantIds: string[];
};

// 채팅 목록 전용
export type ChatListItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatarUrl: string;
  type: 'friend' | 'business';
};
