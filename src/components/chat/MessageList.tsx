// src/components/chat/MessageList.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
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
  const [currentDate, setCurrentDate] = useState(() => ymd(new Date().toISOString()));

  // 날짜 변경 감지
  useEffect(() => {
    const checkDate = () => {
      const newDate = ymd(new Date().toISOString());
      if (newDate !== currentDate) {
        setCurrentDate(newDate);
      }
    };
    const interval = setInterval(checkDate, 30_000); // 30초마다 체크
    return () => clearInterval(interval);
  }, [currentDate]);

  const sections = useMemo(() => {
    const byDay = new Map<string, TextMessage[]>();

    // 기존 메시지들 그룹화
    for (const m of messages) {
      const k = ymd(m.createdAt);
      if (!byDay.has(k)) byDay.set(k, []);
      byDay.get(k)!.push(m);
    }

    // 마지막 메시지 날짜와 현재 날짜가 다르면 빈 섹션 추가
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const lastDate = ymd(lastMessage.createdAt);

      if (lastDate < currentDate && !byDay.has(currentDate)) {
        byDay.set(currentDate, []); // 빈 배열로 오늘 날짜 섹션 추가
      }
    }

    // 정렬
    for (const [, list] of byDay) {
      list.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
    }

    return Array.from(byDay.entries()).sort(([a], [b]) => (a < b ? -1 : 1));
  }, [messages, currentDate]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length]);

  return (
    <div className="no-scrollbar flex h-full flex-col overflow-y-auto px-3 pt-4 pb-3">
      {sections.map(([day, list], sectionIdx) => {
        const isFirstSection = sectionIdx === 0;

        return (
          <section key={day} className="flex flex-col">
            {/* 날짜 표시 - 항상 표시 */}
            <div className={`mb-1 flex justify-center ${isFirstSection ? '' : 'mt-4'}`}>
              <span className="text-caption-medium grid h-[21px] w-[144px] place-items-center rounded-full bg-[var(--gray-500)] text-[color:var(--white)]">
                {new Date(day).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'short',
                })}
              </span>
            </div>

            {/* 메시지 목록 */}
            {list.map((m, idx) => {
              if (!m.text) return null;

              const isMine = m.userId === meId;
              const prev = list[idx - 1];
              const next = list[idx + 1];

              const showAvatar = !isMine && (!prev || prev.userId !== m.userId);
              const showTime = !next || minuteKey(next.createdAt) !== minuteKey(m.createdAt);
              const user = usersById[m.userId];

              let spacing: 'first' | 'different-user' | 'same-user';
              if (!prev || !prev.text) {
                spacing = 'first';
              } else if (prev.userId !== m.userId) {
                spacing = 'different-user';
              } else {
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
