// src/app/BottomIndicator.tsx
import { Icon } from '@/components/Icon';

export default function BottomIndicator() {
  return (
    <div className="flex h-[32px] w-full items-center justify-center bg-[var(--white)]">
      {/* ↑ grid → flex 변경, bg 추가 */}
      <Icon name="iphone-status-bar-lower" className="h-[32px] w-[375px] object-contain" alt="home handle" />
      {/* ↑ h-[5px] w-[134px] → h-[32px] w-[375px] 변경, object-contain 추가 */}
    </div>
  );
}
