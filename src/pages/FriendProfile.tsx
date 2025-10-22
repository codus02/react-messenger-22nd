// src/pages/FriendProfile.tsx
import { useNavigate } from 'react-router-dom';
import StatusBar from '@/app/StatusBar';
import { Icon } from '@/components/Icon';

export default function FriendProfile() {
  const navigate = useNavigate();

  return (
    <>
      {/* 배경 - absolute로 전체 화면 덮기, z-index 낮게 */}
      <div className="absolute inset-0 z-0 bg-[var(--gray-500)]" />

      {/* 컨텐츠 - relative로 배경 위에 표시, z-index 높게 */}
      <div className="relative z-10 flex h-full flex-col">
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
              <Icon name="star" className="h-6 w-6" />
            </div>
            <div style={{ filter: 'brightness(0) invert(1)' }}>
              <Icon name="report" className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* 프로필 컨텐츠 - absolute로 정확한 위치 지정 */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '424px' }}>
          {/* 프로필 사진 120x120 */}
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] overflow-hidden rounded-[26px]">
              <Icon name="friend-chat-4" className="h-full w-full object-cover" />
            </div>

            {/* 이름 + 편집 아이콘 - 16px 간격 */}
            <div className="mt-4 flex items-center gap-2">
              <h1 className="text-center text-[24px] leading-[130%] font-semibold tracking-[-0.072px] text-white">
                세오스
              </h1>
              <Icon name="edit-white" className="h-[18px] w-[18px]" />
            </div>

            {/* 상태 메시지 - 4px 간격 */}
            <p className="mt-1 text-center text-[16px] leading-[140%] font-normal tracking-[-0.048px] text-[var(--gray-400)]">
              상태 메세지를 입력해주세요
            </p>

            {/* 버튼들 - 44px 간격, 박스 사이 40px */}
            <div className="flex items-start" style={{ marginTop: '44px', gap: '40px' }}>
              {/* 대화 - 70x60 박스 */}
              <div
                className="flex flex-shrink-0 flex-col items-center"
                style={{
                  width: '70px',
                  height: '60px',
                  justifyContent: 'space-between',
                }}
              >
                <Icon name="chat-white" className="h-[30px] w-[30px]" />
                <div
                  className="flex items-center justify-center text-[16px] leading-[140%] font-medium tracking-[-0.048px] text-white"
                  style={{ width: '28px', height: '22px' }}
                >
                  대화
                </div>
              </div>

              {/* 음성통화 - 70x60 박스 */}
              <div
                className="flex flex-shrink-0 flex-col items-center"
                style={{
                  width: '70px',
                  height: '60px',
                  justifyContent: 'space-between',
                }}
              >
                <Icon name="call-white" className="h-[30px] w-[30px]" />
                <div
                  className="flex items-center justify-center text-[16px] leading-[140%] font-medium tracking-[-0.048px] text-white"
                  style={{ width: '70px', height: '22px' }}
                >
                  음성통화
                </div>
              </div>

              {/* 영상통화 - 70x60 박스 */}
              <div
                className="flex flex-shrink-0 flex-col items-center"
                style={{
                  width: '70px',
                  height: '60px',
                  justifyContent: 'space-between',
                }}
              >
                <Icon name="video-white" className="h-[30px] w-[30px]" />
                <div
                  className="flex items-center justify-center text-[16px] leading-[140%] font-medium tracking-[-0.048px] text-white"
                  style={{ width: '70px', height: '22px' }}
                >
                  영상통화
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
