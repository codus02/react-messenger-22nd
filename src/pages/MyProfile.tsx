// src/pages/MyProfile.tsx
import { useNavigate } from 'react-router-dom';
import StatusBar from '@/app/StatusBar';
import { Icon } from '@/components/Icon';

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col bg-[var(--gray-500)]">
      {/* 상태바 - 흰색 */}
      <StatusBar theme="light" />

      {/* 헤더 - 52px */}
      <div className="flex h-[52px] items-center justify-between px-4">
        {/* 왼쪽: X 아이콘 (흰색) */}
        <button onClick={() => navigate(-1)} className="cursor-pointer">
          <div style={{ filter: 'brightness(0) invert(1)' }}>
            <Icon name="crossx" className="h-6 w-6" />
          </div>
        </button>

        {/* 가운데: 비어있음 */}
        <div className="flex-1" />

        {/* 오른쪽: 아이콘들 (흰색) */}
        <div className="flex items-center gap-4">
          <div style={{ filter: 'brightness(0) invert(1)' }}>
            <Icon name="image" className="h-6 w-6" />
          </div>
          <div style={{ filter: 'brightness(0) invert(1)' }}>
            <Icon name="group-2" className="h-6 w-6" />
          </div>
          <div style={{ filter: 'brightness(0) invert(1)' }}>
            <Icon name="setting" className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* 프로필 컨텐츠 영역 */}
      <div className="relative flex-1">
        {/* 프로필 사진 */}
        <div
          className="absolute h-[120px] w-[120px] overflow-hidden rounded-[26px] bg-white"
          style={{
            top: '424px',
            left: '126.5px',
          }}
        >
          <Icon name="my-profile-big" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
