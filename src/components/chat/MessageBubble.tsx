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
};

export default function MessageBubble({ message, isMine, user, showAvatar, time, spacing = 'same-user' }: Props) {
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

        {/* 말풍선 - 가변 너비 */}
        <div
          className="flex items-center bg-[var(--white)]"
          style={{
            maxWidth: '204px', // width → maxWidth
            padding: '8px 12px',
            borderRadius: isMine ? '8px 0 8px 8px' : '0 8px 8px 8px',
          }}
        >
          <div
            className="break-words break-all whitespace-pre-wrap"
            style={{
              maxWidth: '180px', // width → maxWidth
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
      </div>

      {!isMine && <Time side="right" />}
    </div>
  );
}
