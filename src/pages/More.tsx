// src/pages/More.tsx
import MenuTab from '@/layouts/MenuTab';

export default function More() {
  return (
    <MenuTab>
      <div className="flex h-full flex-col items-center justify-center bg-[var(--white)]">
        <p className="text-center text-[18px] font-medium text-[var(--gray-500)]">
          더 많은 기능들
          <br />
          coming soon ..
        </p>
      </div>
    </MenuTab>
  );
}
