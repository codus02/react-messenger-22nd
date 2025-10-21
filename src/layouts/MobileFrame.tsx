// src/layouts/MobileFrame.tsx
import type { ReactNode } from 'react';
import BottomIndicator from '@/app/BottomIndicator';

type Props = {
  children: ReactNode;
  bottomBarBg?: 'white' | 'transparent'; // 하단바 배경색
};

export default function MobileFrame({ children, bottomBarBg = 'white' }: Props) {
  return (
    <div className="relative grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <div className="absolute top-[0px] flex h-[812px] w-[375px] flex-col border border-[var(--gray-300)]">
        {/* children 영역 */}
        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>

        {/* 하단바 - 조건부 배경색 */}
        <div className={bottomBarBg === 'white' ? 'bg-[var(--white)]' : ''}>
          <BottomIndicator />
        </div>
      </div>
    </div>
  );
}
