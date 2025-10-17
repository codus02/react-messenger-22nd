// src/pages/Home.tsx
import MenuTab from '@/layouts/MenuTab';

export default function Home() {
  return (
    <MenuTab>
      {/* 친구 목록 내용 */}
      <div className="flex h-full items-center justify-center bg-[var(--gray-100)]">
        <h1 className="text-xl">홈 화면 (친구 목록)</h1>
      </div>
    </MenuTab>
  );
}
