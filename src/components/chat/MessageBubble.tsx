// src/components/chat/MessageBubble.tsx
import type { TextMessage, User } from '@/types/chat';
import { Icon } from '@/components/Icon';

type Props = {
  message: TextMessage;
  isMine: boolean;
  user?: User;
  showAvatar?: boolean;
  time?: string;
  spacing?: 'same-user' | 'different-user' | 'first';
  onToggleReaction: (messageId: string) => void;
};

export default function MessageBubble({
  message,
  isMine,
  user,
  showAvatar,
  time,
  spacing = 'same-user',
  onToggleReaction,
}: Props) {
  const Time = ({ side }: { side: 'left' | 'right' }) =>
    time ? (
      <span
        className={[
          'text-caption-medium leading-none text-[color:var(--gray-500)]',
          side === 'left' ? 'self-end pr-0' : 'self-end pl-0',
        ].join(' ')}
      >
        {time}
      </span>
    ) : null;

  const marginTop = spacing === 'first' ? '' : spacing === 'different-user' ? 'mt-4' : 'mt-1';

  // 더블클릭 핸들러
  const handleDoubleClick = () => {
    onToggleReaction(message.id);
  };

  return (
    <div className={`flex gap-3 ${marginTop} ${isMine ? 'items-end justify-end' : 'items-start justify-start'}`}>
      {!isMine && (
        <div className="h-9 w-9 shrink-0 self-start">
          {showAvatar ? (
            user?.avatarUrl ? (
              <Icon name={user.avatarUrl} className="h-9 w-9 rounded-[12px] object-cover" />
            ) : (
              <div className="h-9 w-9 rounded-[12px] bg-[var(--gray-300)]" />
            )
          ) : (
            <div className="h-9 w-9" />
          )}
        </div>
      )}

      {isMine && <Time side="left" />}

      <div className={`flex max-w-[204px] flex-col ${isMine ? 'items-end' : 'items-start'}`}>
        {!isMine && showAvatar && (
          <div className="text-body2-medium mb-1 pl-1 text-[color:var(--gray-800)]">{user?.name ?? ''}</div>
        )}

        {/* 말풍선 + 하트를 flex-col로 감싸기 */}
        <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'}`}>
          {/* 말풍선 */}
          <div
            className="flex cursor-pointer items-center bg-[var(--white)]"
            onDoubleClick={handleDoubleClick}
            style={{
              maxWidth: '204px',
              padding: '8px 12px',
              borderRadius: isMine ? '8px 0 8px 8px' : '0 8px 8px 8px',
            }}
          >
            <div
              className="break-words break-all whitespace-pre-wrap"
              style={{
                maxWidth: '180px',
                color: 'var(--gray-scale-gray-800, #3B3B45)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '140%',
                letterSpacing: '-0.042px',
                textAlign: isMine ? 'right' : 'left',
              }}
            >
              {message.text}
            </div>
          </div>

          {/* 하트 이모지 - 말풍선 아래 2px 간격 */}
          {message.reaction && (
            <div
              className="mt-[2px]"
              style={{
                backgroundColor: 'var(--gray-100)',
                borderRadius: '10px',
                padding: '2px 6px',
                fontSize: '14px',
                border: '1px solid var(--gray-300)',
              }}
            >
              ❤️
            </div>
          )}
        </div>
      </div>

      {!isMine && <Time side="right" />}
    </div>
  );
}
