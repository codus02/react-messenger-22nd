// src/pages/ChatRoom.tsx

import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import { useLocalMessages, type TextMessage } from '@/features/chat/hooks/useLocalMessages';
import { useParams, useNavigate } from 'react-router-dom';
import type { User } from '@/types/chat';

// JSON 파일 import
import usersData from '@/data/users.json';
import messagesData from '@/data/messages.json';

const ME_ID = 'me';
const CHAT_ID = 'c_ceos';

export default function ChatRoom() {
  const { chatId = '' } = useParams();
  const nav = useNavigate();

  // JSON 데이터 사용
  const usersById: Record<string, User> = usersData;
  const SEED: TextMessage[] = messagesData as TextMessage[];

  const { messages, sendText } = useLocalMessages(chatId || CHAT_ID, ME_ID, SEED);

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
