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
      {/* no-scrollbar 클래스 추가 */}
      <div className="no-scrollbar flex-1 overflow-auto">{children}</div>
      <div className="h-[32px]" />
      <Menu />
    </div>
  );
}
