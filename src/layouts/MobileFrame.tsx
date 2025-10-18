// src/layouts/MobileFrame.tsx
import type { ReactNode } from 'react';
import BottomIndicator from '@/app/BottomIndicator';

type Props = {
  children: ReactNode;
  bottomBarBg?: boolean; // 하단바 배경 여부
};

export default function MobileFrame({ children, bottomBarBg = true }: Props) {
  return (
    <div className="relative grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <div className="relative flex h-[812px] w-[375px] flex-col overflow-hidden border border-[var(--gray-300)]">
        {/* children 영역 */}
        <div className="flex flex-1 flex-col">{children}</div>

        {/* 하단바 - 조건부 배경 */}
        <div className={`absolute right-0 bottom-0 left-0 ${bottomBarBg ? 'bg-[var(--white)]' : ''}`}>
          <BottomIndicator />
        </div>
      </div>
    </div>
  );
}
