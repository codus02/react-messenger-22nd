import React from 'react';
import type { Message, User } from '@/types/chat';

type Props = {
  message: Message;
  user: User;
  isMe: boolean;
};

export default React.memo(function MessageItem({ message, user, isMe }: Props) {
  return (
    <li className={`flex items-end gap-3 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {/* 상대 메시지일 때만 아바타 표시 */}
      {!isMe && (
        <img
          src={user.avatarUrl || '/avatars/user.png'}
          alt={user.name}
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
      )}

      {/* 본문 영역 */}
      <div className={`flex max-w-[78%] flex-col ${isMe ? 'items-end' : 'items-start'}`}>
        {/* 상대 이름 (내 메시지엔 없음) */}
        {!isMe && <div className="text-body2-medium mb-1 text-[color:var(--gray-800)]">{user.name}</div>}

        {/* 말풍선 */}
        <div
          className={[
            'rounded-2xl px-3 py-2',
            // 꼬리 방향만 다르게
            isMe ? 'rounded-br-bubble' : 'rounded-bl-bubble',
            // 테두리/그림자 제거 + 배경/텍스트 색
            'bg-[var(--white)] text-[color:var(--black)]',
          ].join(' ')}
        >
          {message.kind === 'text' && (
            <div className="text-body1-regular break-words whitespace-pre-wrap">{message.text}</div>
          )}
        </div>

        {/* 시간: 말풍선 아래 오른쪽 정렬 */}
        <div className="text-caption mt-1 self-end text-[color:var(--gray-500)]">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </li>
  );
});
