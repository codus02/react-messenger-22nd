// src/components/chat/ChatScreen.tsx
import MessageList from './MessageList';
import type { TextMessage, User } from '@/types/chat';

type Props = {
  messages: TextMessage[];
  usersById: Record<string, User>;
  meId: string;
  onToggleReaction: (messageId: string) => void; // 추가
};

export default function ChatScreen({ messages, usersById, meId, onToggleReaction }: Props) {
  return (
    <div className="flex-1 overflow-hidden">
      <MessageList
        messages={messages}
        usersById={usersById}
        meId={meId}
        onToggleReaction={onToggleReaction} // 추가
      />
    </div>
  );
}
