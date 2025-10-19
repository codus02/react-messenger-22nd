// src/components/home/FriendList.tsx
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import FriendItem from './FriendItem';

type Friend = {
  id: string;
  profileImage: string;
  name: string;
  count?: number;
};

export default function FriendList() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [friendOpen, setFriendOpen] = useState(false);

  // 비즈니스 친구 4명
  const businessFriends: Friend[] = Array.from({ length: 4 }, (_, i) => ({
    id: `business-${i}`,
    profileImage: 'friend-chat-4',
    name: '세오스',
  }));

  // 친구 65명
  const friends: Friend[] = [
    { id: 'official', profileImage: 'line-img', name: '공식 계정', count: 10 },
    { id: 'recommended', profileImage: 'friend-chat-4', name: '추천 친구', count: 136 },
    ...Array.from({ length: 63 }, (_, i) => ({
      id: `friend-${i}`,
      profileImage: 'friend-chat-4',
      name: '세오스',
    })),
  ];

  return (
    <div className="bg-[var(--white)]">
      {/* 비즈니스 탭 */}
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

      {/* 비즈니스 친구 목록 */}
      {businessOpen && (
        <div className="flex flex-col gap-2 py-2">
          {businessFriends.map((friend) => (
            <FriendItem key={friend.id} profileImage={friend.profileImage} name={friend.name} count={friend.count} />
          ))}
        </div>
      )}

      {/* 친구 탭 */}
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

      {/* 친구 목록 */}
      {friendOpen && (
        <div className="flex flex-col gap-2 py-2">
          {friends.map((friend) => (
            <FriendItem key={friend.id} profileImage={friend.profileImage} name={friend.name} count={friend.count} />
          ))}
        </div>
      )}
    </div>
  );
}
