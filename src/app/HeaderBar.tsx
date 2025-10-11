// src/app/HeaderBar.tsx
import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar({ title }: { title: string }) {
  const nav = useNavigate();
  return (
    <div className="flex h-[47px] w-full items-center justify-between bg-[var(--white)] px-4">
      <div className="flex items-center gap-3">
        <button onClick={() => nav(-1)} aria-label="뒤로가기">
          <Icon name="stroke-1" className="h-5 w-5" />
        </button>

        <div className="flex items-baseline gap-2">
          <h1 className="text-body1-bold">{title}</h1>
          {/* 멤버 수는 요구대로 고정 65 */}
          <span className="text-caption text-[color:var(--gray-600)]">65</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Icon name="search" className="h-6 w-6" />
        <Icon name="call" className="h-6 w-6" />
        <Icon name="burger" className="h-6 w-6" />
      </div>
    </div>
  );
}
