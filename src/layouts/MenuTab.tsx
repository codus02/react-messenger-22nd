// src/layouts/MenuTab.tsx
import type { ReactNode } from 'react';
import StatusBar from '@/app/StatusBar';
import Menu from '@/components/chatrooms/Menu';

type Props = {
  children: ReactNode;
};

export default function MenuTab({ children }: Props) {
  return (
    <div className="flex h-full flex-col bg-[var(--white)]">
      <StatusBar />
      <div className="flex-1 overflow-auto">{children}</div>
      <Menu />
      {/* 메뉴탭 아래 32px 간격 */}
      <div className="h-[32px]" />
    </div>
  );
}
