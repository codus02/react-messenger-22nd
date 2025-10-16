import { useState, useEffect, useMemo } from 'react';
import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import BottomIndicator from '@/app/BottomIndicator';
import { useLocalMessages, type TextMessage } from '@/features/chat/hooks/useLocalMessages';
import { useParams, useNavigate } from 'react-router-dom';
import type { User } from '@/types/chat';
import ceossUrl from '@/icons/ceoss.svg';
import ceoosUrl from '@/icons/ceoos.svg';
import cceosUrl from '@/icons/cceos.svg';

const ME_ID = 'me';
const CHAT_ID = 'c_ceos';

// 전체 SEED 데이터
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
    text: '22기 디자인 세오스입니다! 잘 부탁드립니다!!',
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

  // 날짜 변경 감지
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const checkDate = () => {
      const newDate = new Date().toISOString().slice(0, 10);
      if (newDate !== currentDate) {
        setCurrentDate(newDate);
      }
    };
    const interval = setInterval(checkDate, 30_000);
    return () => clearInterval(interval);
  }, [currentDate]);

  const messagesWithToday = useMemo(() => {
    if (messages.length === 0) return messages;
    const lastMessage = messages[messages.length - 1];
    const lastDate = lastMessage.createdAt.slice(0, 10);
    if (lastDate < currentDate) {
      const dummyMessage: TextMessage = {
        id: `date-${currentDate}`,
        kind: 'text',
        text: '',
        userId: ME_ID,
        chatId: chatId || CHAT_ID,
        createdAt: new Date().toISOString(),
      };
      return [...messages, dummyMessage];
    }
    return messages;
  }, [messages, currentDate, chatId]);

  return (
    <>
      <StatusBar />
      <HeaderBar title="CEOS 22기 잡담방" onBack={() => nav('/chats')} />
      <div className="min-h-0 flex-1 bg-[var(--green-100)]">
        <MessageList messages={messagesWithToday} usersById={usersById} meId={ME_ID} />
      </div>
      <ChatInput onSend={sendText} />
      <BottomIndicator />
    </>
  );
}
