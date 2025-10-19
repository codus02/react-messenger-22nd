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
      <div
        className="no-scrollbar flex-1 overflow-auto"
        id="menu-tab-scroll" // ID 추가
      >
        {children}
      </div>
      <Menu />
    </div>
  );
}
