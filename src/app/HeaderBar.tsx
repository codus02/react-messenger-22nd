// src/app/HeaderBar.tsx
import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar({ title, onBack }: { title: string; onBack?: () => void }) {
  const nav = useNavigate();

  return (
    <div className="flex h-[47px] w-full items-center justify-between bg-[var(--white)] px-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack || (() => nav(-1))} aria-label="뒤로가기" className="cursor-pointer">
          {/* ↑ cursor-pointer 추가 */}
          <Icon name="stroke-1" className="h-5 w-5" />
        </button>

        <div className="flex items-baseline gap-2">
          <h1 className="text-body1-bold">{title}</h1>
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
