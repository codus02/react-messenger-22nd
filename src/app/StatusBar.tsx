// src/app/StatusBar.tsx
import { Icon } from '@/components/Icon';
import NowClock from '@/components/NowClock';

export default function StatusBar() {
  return (
    <div className="flex h-[47px] w-full items-center bg-[var(--white)]">
      {/* ↑ bg-[var(--white)] 추가 */}
      {/* 좌측 시계: 88x47 박스 내 우측 정렬 (글자 17px) */}
      <div className="flex h-[47px] w-[88px] items-center justify-end pr-3">
        <NowClock
          refreshMs={30_000}
          className="text-[17px] leading-[17px] font-medium"
          format={(d) => d.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        />
      </div>

      {/* 가운데 타이틀 */}
      <div className="flex-1"></div>

      {/* 우측 인디케이터 묶음: 위·아래·오른쪽 6.5px 여백, 실제 아이콘 77.3x13 */}
      <div className="h-[47px] pr-[6.5px]">
        <div className="grid h-full place-items-center p-[6.5px]">
          <Icon name="indicators-group" className="h-[13px] w-[77.3px] object-contain" alt="status indicators" />
        </div>
      </div>
    </div>
  );
}
