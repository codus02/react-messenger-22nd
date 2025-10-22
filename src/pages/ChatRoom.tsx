// src/pages/ChatRoom.tsx
//import { useState, useEffect, useMemo } from 'react';
import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import { useLocalMessages, type TextMessage } from '@/features/chat/hooks/useLocalMessages';
import { useParams, useNavigate } from 'react-router-dom';
import type { User } from '@/types/chat';
import ceossUrl from '@/icons/ceoss.svg';
import ceoosUrl from '@/icons/ceoos.svg';
import cceosUrl from '@/icons/cceos.svg';

const ME_ID = 'me';
const CHAT_ID = 'c_ceos';

const SEED: TextMessage[] = [
  {
    id: 'm1',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_cony',
    text: '[CEOS 22기 잡담방]\n22기 여러분 모두 환영합니다!\n🎉 모두들 서로 반갑게 인사해 주세요!',
    createdAt: '2025-09-18T12:30:00+09:00',
  },
  {
    id: 'm1_2',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_cony',
    text: '그리고 여러분 공지 확인 부탁드립니다🥳',
    createdAt: '2025-09-18T12:30:05+09:00',
  },
  {
    id: 'm2',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_brown',
    text: '22기 여러분 세오스의 가족이 되신걸 환영합니다!!',
    createdAt: '2025-09-18T12:35:00+09:00',
  },
  {
    id: 'm3',
    kind: 'text',
    chatId: CHAT_ID,
    userId: ME_ID,
    text: '다들 반갑습니다!!',
    createdAt: '2025-09-18T12:40:00+09:00',
  },
  {
    id: 'm4',
    kind: 'text',
    chatId: CHAT_ID,
    userId: ME_ID,
    text: '22기 디자인 세오스입니다!\n잘 부탁드립니다!!',
    createdAt: '2025-09-18T12:41:00+09:00',
  },
  {
    id: 'm5',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_cceos',
    text: '안녕하세요! 22기 디자인 세세오스입니다. 잘 부탁드립니다!!',
    createdAt: '2025-09-18T12:45:00+09:00',
  },
];

const usersById: Record<string, User> = {
  me: { id: 'me', name: '세오스', avatarUrl: '/avatars/me.png' },
  u_brown: { id: 'u_brown', name: '스세오', avatarUrl: ceossUrl },
  u_cony: { id: 'u_cony', name: '오스세', avatarUrl: ceoosUrl },
  u_cceos: { id: 'u_cceos', name: '세세오스', avatarUrl: cceosUrl },
};

export default function ChatRoom() {
  const { chatId = '' } = useParams();
  const nav = useNavigate();
  const { messages, sendText } = useLocalMessages(chatId || CHAT_ID, ME_ID, SEED);

  // 더미 날짜 메시지 생성 로직 제거 - 실제 메시지만 표시
  return (
    <div className="flex h-full flex-col bg-[var(--white)]">
      <StatusBar />
      <HeaderBar title="CEOS 22기 잡담방" onBack={() => nav('/chats')} />
      <div className="min-h-0 flex-1 bg-[var(--green-100)]">
        <MessageList messages={messages} usersById={usersById} meId={ME_ID} />
      </div>
      <ChatInput onSend={sendText} />
    </div>
  );
}
