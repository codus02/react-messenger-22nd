// src/components/chatrooms/Roomsearch.tsx
import { Icon } from '@/components/Icon';

export default function Roomsearch() {
  return (
    <div className="bg-[var(--white)] px-4 pt-6 pb-6">
      {/* pb-6 = 24px (하단 간격) 추가, bg-white 추가 */}
      <div className="flex items-center justify-between rounded-md bg-[var(--gray-100)] p-3">
        {/* 왼쪽: 검색 아이콘 + 텍스트 */}
        <div className="flex items-center gap-3">
          <Icon name="search" className="h-[18px] w-[18px] text-[var(--gray-500)]" />
          <span className="text-[14px] font-medium text-[var(--gray-500)]">톡방 검색</span>
        </div>

        {/* 오른쪽: 스캔 아이콘 */}
        <Icon name="scan" className="h-[18px] w-[18px] text-[var(--gray-500)]" />
      </div>
    </div>
  );
}
