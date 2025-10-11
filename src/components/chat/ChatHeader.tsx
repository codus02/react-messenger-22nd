// src/components/chat/ChatHeader.tsx
import { Icon } from '@/components/Icon';

type Props = {
  title: string;
  memberCount?: number;
  onBack: () => void;
};

export default function ChatHeader({ title, memberCount = 65, onBack }: Props) {
  return (
    <header className="relative flex h-12 items-center border-b border-[var(--gray-200)] bg-[var(--white)]">
      {/* 좌측: 뒤로가기 */}
      <button type="button" onClick={onBack} aria-label="뒤로가기" className="absolute left-3">
        <Icon name="stroke-1" className="h-5 w-5 rotate-90" />
      </button>

      {/* 중앙: 방 아이콘 + 타이틀 + 인원수 */}
      <div className="pointer-events-none mx-auto flex items-center gap-2">
        {/* 시안의 작은 사각형 아이콘 (보유 아이콘 중 'vector' 사용) */}
        <Icon name="vector" className="h-3 w-3" />
        <h1 className="text-title-2">{title}</h1>
        <span className="text-body2-regular text-[color:var(--gray-700)]">{memberCount}</span>
      </div>

      {/* 우측: 검색 / 통화 / 메뉴 */}
      <div className="absolute right-3 flex items-center gap-3">
        <Icon name="search" className="h-6 w-6" />
        <Icon name="call" className="h-6 w-6" />
        <Icon name="burger" className="h-6 w-6" />
      </div>
    </header>
  );
}
