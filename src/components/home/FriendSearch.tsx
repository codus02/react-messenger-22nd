// src/components/home/Friendsearch.tsx
import { Icon } from '@/components/Icon';

export default function Friendsearch() {
  return (
    <div className="bg-[var(--white)] px-4">
      <div className="flex items-center justify-between rounded-md bg-[var(--gray-100)] p-3">
        {/* 왼쪽: 검색 아이콘 + 텍스트 */}
        <div className="flex items-center gap-3">
          <div className="opacity-60">
            <Icon name="search" className="h-[18px] w-[18px]" />
          </div>
          <span className="text-[14px] font-medium text-[var(--gray-500)]">친구 검색</span>
        </div>

        {/* 오른쪽: 스캔 아이콘 */}
        <div className="opacity-60">
          <Icon name="scan" className="h-[18px] w-[18px]" />
        </div>
      </div>
    </div>
  );
}
