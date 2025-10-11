import StatusBar from '@/app/StatusBar';
import { Icon } from '@/components/Icon';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import { useChatRoom } from '@/features/chat/hooks/useMessages';
import { useParams, useNavigate } from 'react-router-dom';
import { useChatState } from '@/context/ChatContext';

export default function ChatRoom() {
  const { chatId = '' } = useParams();
  const nav = useNavigate();
  const { messages, users, meId, sendText } = useChatRoom(chatId);
  const { conversations } = useChatState();
  const title = conversations[chatId]?.title ?? '대화';

  if (!meId) return null;

  return (
    <div className="flex h-full flex-col bg-[var(--white)]">
      <StatusBar />
      <header className="flex h-12 items-center justify-between border-b px-3">
        <div className="flex items-center gap-2">
          <button onClick={() => nav(-1)}>
            <Icon name="chevron-left" className="h-6 w-6" />
          </button>
          <h1 className="text-title-2">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="search" className="h-6 w-6" />
          <Icon name="burger" className="h-6 w-6" />
        </div>
      </header>

      <div className="min-h-0 flex-1">
        <MessageList messages={messages} usersById={users} meId={meId} />
      </div>

      <ChatInput onSend={sendText} />
    </div>
  );
}
