import type { TextMessage, User } from '@/types/chat';

type Props = {
  message: TextMessage;
  isMine: boolean;
  user?: User;
  showAvatar?: boolean; // 같은 사람의 첫 말풍선일 때만 아바타/이름
  time?: string; // 표시할 시간(없으면 숨김)
};

export default function MessageBubble({ message, isMine, user, showAvatar, time }: Props) {
  const Time = ({ side }: { side: 'left' | 'right' }) =>
    time ? (
      <span
        className={[
          'text-caption-medium leading-none text-[color:var(--gray-500)]',
          // 시간 텍스트의 좌우 여백 (필요 시 조정)
          side === 'left' ? 'self-end pr-0' : 'self-end pl-0',
        ].join(' ')}
      >
        {time}
      </span>
    ) : null;

  return (
    // 채팅 말풍선과 시간 사이 간격: 4px (gap-1)
    <div className={`mb-2 flex gap-1 ${isMine ? 'items-end justify-end' : 'items-start justify-start'}`}>
      {/* 상대 메시지일 때만 아바타(둥근 사각) */}
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

      {/* 내 메시지면 시간 먼저(왼쪽), 아니면 마지막(오른쪽) */}
      {isMine && <Time side="left" />}

      {/* 말풍선 스택 */}
      <div className={`flex max-w-[75%] flex-col ${isMine ? 'items-end' : 'items-start'}`}>
        {!isMine && showAvatar && (
          <div className="text-body2-medium mb-1 pl-1 text-[color:var(--gray-800)]">{user?.name ?? ''}</div>
        )}

        {/* ⬇️ 내부 패딩을 모두 12px로 통일: px-4 → px-3, py-3 그대로 */}
        <div className="text-body2-medium rounded-[12px] bg-[var(--white)] px-3 py-3 break-words break-all whitespace-pre-wrap text-[color:var(--gray-800)]">
          {message.text}
        </div>
      </div>

      {!isMine && <Time side="right" />}
    </div>
  );
}
