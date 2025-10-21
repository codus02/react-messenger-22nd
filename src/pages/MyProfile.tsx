// src/pages/MyProfile.tsx
import { useNavigate } from 'react-router-dom';
import StatusBar from '@/app/StatusBar';
import { Icon } from '@/components/Icon';

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full flex-col bg-[var(--gray-800)]">
      {/* 상태바 - 흰색 */}
      <StatusBar theme="light" />

      {/* 헤더 - 52px */}
      <div className="flex h-[52px] items-center justify-between px-4">
        {/* 왼쪽: X 아이콘 */}
        <button onClick={() => navigate(-1)} className="cursor-pointer">
          <div style={{ filter: 'brightness(0) invert(1)' }}>
            <Icon name="crossx" className="h-6 w-6" />
          </div>
        </button>

        <div className="flex-1" />

        {/* 오른쪽: 아이콘들 */}
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

      {/* 프로필 컨텐츠 - absolute로 정확한 위치 지정 */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '424px' }}>
        {/* 프로필 사진 120x120 */}
        <div className="flex flex-col items-center">
          <div className="h-[120px] w-[120px] overflow-hidden rounded-[26px]">
            <Icon name="my-profile-big" className="h-full w-full object-cover" />
          </div>

          {/* 이름 - 16px 간격 */}
          <h1 className="mt-4 text-center text-[24px] leading-[130%] font-semibold tracking-[-0.072px] text-white">
            세오스
          </h1>

          {/* 상태 메시지 - 4px 간격 */}
          <p className="mt-1 text-center text-[16px] leading-[140%] font-normal tracking-[-0.048px] text-[var(--gray-500)]">
            메신저 서비스 리디자인
          </p>

          {/* 버튼들 - 44px 간격 */}
          <div className="flex items-start" style={{ marginTop: '44px', gap: '80px' }}>
            {/* 프로필 편집 */}
            <div className="flex flex-col items-center">
              <Icon name="edit" className="h-[30px] w-[30px]" />
              <div
                className="mt-2 flex items-center justify-center text-[16px] leading-[140%] font-medium tracking-[-0.048px] text-white"
                style={{ width: '73px', height: '22px' }}
              >
                프로필 편집
              </div>
            </div>

            {/* Keep 메모 */}
            <div className="flex flex-col items-center">
              <Icon name="bookmark-white" className="h-[30px] w-[30px]" />
              <div
                className="mt-2 flex items-center justify-center text-[16px] leading-[140%] font-medium tracking-[-0.048px] text-white"
                style={{ width: '70px', height: '22px' }}
              >
                Keep 메모
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
