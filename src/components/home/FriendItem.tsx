// src/components/home/FriendItem.tsx
import { Icon } from '@/components/Icon';

type Props = {
  profileImage: string;
  name: string;
  count?: number;
};

export default function FriendItem({ profileImage, name, count }: Props) {
  return (
    <div className="flex h-[42px] w-full items-center px-4">
      {/* 프로필 사진 */}
      <div className="h-[42px] w-[42px] flex-shrink-0">
        <Icon name={profileImage} className="h-full w-full rounded-lg object-cover" />
      </div>

      {/* 이름 */}
      <span
        className="ml-3 flex-1 text-[16px] font-medium"
        style={{
          color: 'var(--basic-black, #222)',
          letterSpacing: '-0.048px',
          lineHeight: '140%',
        }}
      >
        {name}
      </span>

      {/* 카운트 + 화살표 (공식 계정, 추천 친구만) */}
      {count !== undefined && (
        <div className="flex cursor-pointer items-center gap-1">
          <span
            className="text-[14px] font-medium"
            style={{
              color: 'var(--gray-scale-gray-400, #CECED4)',
              letterSpacing: '-0.042px',
              lineHeight: '140%',
            }}
          >
            {count}
          </span>
          <div style={{ color: 'var(--gray-400)' }}>
            <Icon name="arrow-right" className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
  );
}
