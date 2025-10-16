//src>components>chat>MessageBubble.tsx
import type { TextMessage, User } from '@/types/chat';

type Props = {
  message: TextMessage;
  isMine: boolean;
  user?: User;
  showAvatar?: boolean;
  time?: string;
  spacing?: 'same-user' | 'different-user' | 'first'; // ← 'first' 추가
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

  // 간격 계산: 첫 메시지는 0, 같은 사용자 4px, 다른 사용자 16px
  const marginTop = spacing === 'first' ? '' : spacing === 'different-user' ? 'mt-4' : 'mt-1';

  return (
    <div className={`flex gap-3 ${marginTop} ${isMine ? 'items-end justify-end' : 'items-start justify-start'}`}>
      {/* ↑ marginBottom 제거, marginTop으로 변경 */}
      {!isMine && (
        <div className="h-9 w-9 shrink-0 self-start">
          {showAvatar ? (
            user?.avatarUrl ? (
              <img src={user.avatarUrl} alt={user?.name ?? 'user'} className="h-9 w-9 rounded-[12px] object-cover" />
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

        <div className="text-body2-medium rounded-[12px] bg-[var(--white)] px-3 py-2 break-words break-all whitespace-pre-wrap text-[color:var(--gray-800)]">
          {message.text}
        </div>
      </div>

      {!isMine && <Time side="right" />}
    </div>
  );
}
