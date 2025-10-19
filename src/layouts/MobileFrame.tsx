// src/layouts/MobileFrame.tsx
import type { ReactNode } from 'react';
import BottomIndicator from '@/app/BottomIndicator';

export default function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <div className="absolute top-[0px] flex h-[812px] w-[375px] flex-col border border-[var(--gray-300)] bg-[var(--white)]">
        {/* children 영역: 하단바 제외한 나머지 */}
        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
        {/* 하단바 고정 */}
        <BottomIndicator />
      </div>
    </div>
  );
}
