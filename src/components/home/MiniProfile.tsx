// src/components/home/MiniProfile.tsx
import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

export default function MiniProfile() {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-[52px] items-center justify-between bg-[var(--white)] px-4"
      style={{
        borderBottom: '1px solid var(--gray-scale-gray-100, #F8F8F9)',
      }}
    >
      {/* 왼쪽: 프로필 + 이름 (88x38) */}
      <div
        className="flex cursor-pointer items-center"
        style={{ width: '88px', height: '38px' }}
        onClick={() => navigate('/profile/me')}
      >
        {/* 프로필 이미지 38x38 */}
        <div className="h-[38px] w-[38px] flex-shrink-0">
          <Icon name="my-profile" className="h-full w-full rounded-lg object-cover" />
        </div>

        {/* 이름 */}
        <span
          className="ml-auto text-[16px] font-medium"
          style={{
            color: 'var(--basic-black, #222)',
            letterSpacing: '-0.048px',
            lineHeight: '140%',
          }}
        >
          세오스
        </span>
      </div>

      {/* 오른쪽: 아이콘들 */}
      <div className="flex items-center gap-4">
        <Icon name="bookmark" className="h-6 w-6" />
        <Icon name="notification" className="h-6 w-6" />
        <Icon name="add-user" className="h-6 w-6" />
        <Icon name="setting" className="h-6 w-6" />
      </div>
    </div>
  );
}
