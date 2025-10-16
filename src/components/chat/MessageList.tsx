import { useEffect, useMemo, useRef } from 'react';
import type { TextMessage, User } from '@/types/chat';
import MessageBubble from './MessageBubble';

type Props = {
  messages: TextMessage[];
  usersById: Record<string, User>;
  meId: string;
};

function ymd(iso: string) {
  return iso.slice(0, 10);
}
function hm(iso: string) {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}
function minuteKey(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}:${d.getMinutes()}`;
}

export default function MessageList({ messages, usersById, meId }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => {
    const byDay = new Map<string, TextMessage[]>();
    for (const m of messages) {
      const k = ymd(m.createdAt);
      if (!byDay.has(k)) byDay.set(k, []);
      byDay.get(k)!.push(m);
    }
    for (const [, list] of byDay) {
      list.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
    }
    return Array.from(byDay.entries()).sort(([a], [b]) => (a < b ? -1 : 1));
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length]);

  return (
    <div className="flex h-full flex-col overflow-y-auto p-3">
      {sections.map(([day, list]) => {
        const hasValidMessages = list.some((m) => m.text);
        if (!hasValidMessages) return null;

        return (
          <section key={day} className="flex flex-col">
            <div className="my-1 flex justify-center">
              <span className="text-caption-medium grid h-[21px] w-[144px] place-items-center rounded-full bg-[var(--gray-500)] text-[color:var(--white)]">
                {new Date(day).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'short',
                })}
              </span>
            </div>

            {list.map((m, idx) => {
              if (!m.text) return null;

              const isMine = m.userId === meId;
              const prev = list[idx - 1];
              const next = list[idx + 1];

              const showAvatar = !isMine && (!prev || prev.userId !== m.userId);
              const showTime = !next || minuteKey(next.createdAt) !== minuteKey(m.createdAt);
              const user = usersById[m.userId];

              // 간격 계산: 첫 메시지, 다른 사용자, 같은 사용자 구분
              let spacing: 'first' | 'different-user' | 'same-user';
              if (!prev || !prev.text) {
                // 섹션의 첫 메시지 (또는 이전이 빈 메시지)
                spacing = 'first';
              } else if (prev.userId !== m.userId) {
                // 이전 메시지와 다른 사용자
                spacing = 'different-user';
              } else {
                // 같은 사용자
                spacing = 'same-user';
              }

              return (
                <MessageBubble
                  key={m.id}
                  message={m}
                  isMine={isMine}
                  user={user}
                  showAvatar={showAvatar}
                  time={showTime ? hm(m.createdAt) : undefined}
                  spacing={spacing}
                />
              );
            })}
          </section>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
