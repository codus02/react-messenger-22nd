// src/components/home/FriendList.tsx
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function FriendList() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [friendOpen, setFriendOpen] = useState(false);

  return (
    <div className="bg-[var(--white)]">
      {/* 비즈니스 탭 - 전체 클릭 가능 */}
      <button
        onClick={() => setBusinessOpen(!businessOpen)}
        className="flex h-[44px] w-full cursor-pointer items-center justify-between border-t border-[var(--gray-200)] px-4 py-3 transition-colors hover:bg-[var(--gray-50)]"
      >
        <div className="flex items-center gap-[6px]">
          <span className="text-[14px] font-medium text-[#222]">비즈니스</span>
          <span className="text-[14px] font-medium text-[#222]">4</span>
        </div>

        <Icon
          name="arrow-down-2"
          className={`h-4 w-4 text-[var(--gray-400)] transition-transform ${businessOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 비즈니스 채팅 목록 (드롭다운) */}
      {businessOpen && (
        <div className="px-4 py-2">
          <div>비즈니스 친구 목록</div>
        </div>
      )}

      {/* 친구 탭 - 전체 클릭 가능 */}
      <button
        onClick={() => setFriendOpen(!friendOpen)}
        className="flex h-[44px] w-full cursor-pointer items-center justify-between border-t border-[var(--gray-200)] px-4 py-3 transition-colors hover:bg-[var(--gray-50)]"
      >
        <div className="flex items-center gap-[6px]">
          <span className="text-[14px] font-medium text-[#222]">친구</span>
          <span className="text-[14px] font-medium text-[#222]">65</span>
        </div>

        <Icon
          name="arrow-down-2"
          className={`h-4 w-4 text-[var(--gray-400)] transition-transform ${friendOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 친구 리스트 (드롭다운) */}
      {friendOpen && (
        <div className="px-4 py-2">
          <div>친구 목록</div>
        </div>
      )}
    </div>
  );
}
