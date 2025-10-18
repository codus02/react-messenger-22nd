// src/components/home/FriendList.tsx
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function FriendList() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [friendOpen, setFriendOpen] = useState(false);

  return (
    <div className="bg-[var(--white)]">
      {/* 비즈니스 탭 */}
      <div className="flex h-[44px] w-full items-center justify-between border-t border-[var(--gray-200)] px-4 py-3">
        {/* 왼쪽: 비즈니스 + 숫자 */}
        <div className="flex items-center gap-[6px]">
          <span className="text-[14px] font-medium text-[#222]">비즈니스</span>
          <span className="text-[14px] font-medium text-[#222]">4</span>
        </div>

        {/* 오른쪽: 화살표 아이콘 */}
        <button onClick={() => setBusinessOpen(!businessOpen)} className="cursor-pointer">
          <Icon
            name="arrow-down-2"
            className={`h-4 w-4 text-[var(--gray-400)] transition-transform ${businessOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* 비즈니스 리스트 (드롭다운) */}
      {businessOpen && (
        <div className="px-4 py-2">
          {/* 비즈니스 친구 목록 */}
          <div>비즈니스 친구 목록</div>
        </div>
      )}

      {/* 친구 탭 */}
      <div className="flex h-[44px] w-full items-center justify-between border-t border-[var(--gray-200)] px-4 py-3">
        {/* 왼쪽: 친구 + 숫자 */}
        <div className="flex items-center gap-[6px]">
          <span className="text-[14px] font-medium text-[#222]">친구</span>
          <span className="text-[14px] font-medium text-[#222]">65</span>
        </div>

        {/* 오른쪽: 화살표 아이콘 */}
        <button onClick={() => setFriendOpen(!friendOpen)} className="cursor-pointer">
          <Icon
            name="arrow-down-2"
            className={`h-4 w-4 text-[var(--gray-400)] transition-transform ${friendOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* 친구 리스트 (드롭다운) */}
      {friendOpen && (
        <div className="px-4 py-2">
          {/* 친구 목록 */}
          <div>친구 목록</div>
        </div>
      )}
    </div>
  );
}
