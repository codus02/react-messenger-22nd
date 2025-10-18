// src/components/home/Header.tsx
import { Icon } from '@/components/Icon';

export default function Header() {
  return (
    <div className="flex h-[52px] items-center justify-end bg-[var(--white)] px-4 py-[14px]">
      {/* 오른쪽 아이콘들 - 역순으로 배치 */}
      <div className="flex items-center gap-4">
        {/* gap-4 = 16px */}
        <Icon name="bookmark" className="h-6 w-6" />
        <Icon name="notification" className="h-6 w-6" />
        <Icon name="add-user" className="h-6 w-6" />
        <Icon name="setting" className="h-6 w-6" />
      </div>
    </div>
  );
}
