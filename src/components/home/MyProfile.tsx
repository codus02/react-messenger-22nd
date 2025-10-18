// src/components/home/MyProfile.tsx
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer items-center justify-between bg-[var(--white)] p-4 transition-colors hover:bg-[var(--gray-50)]"
      onClick={() => navigate('/profile/me')}
    >
      {/* 왼쪽: 텍스트 영역 */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-semibold text-[#222]">세오스</h2>
        <p className="text-[14px] font-medium text-[var(--gray-600)]">메신저 서비스 리디자인</p>
      </div>

      {/* 오른쪽: 프로필 이미지 - Icon 컴포넌트 사용 */}
      <div className="h-[68px] w-[68px] flex-shrink-0">
        <Icon name="my-profile" className="h-full w-full rounded-[18px] object-cover" />
      </div>
    </div>
  );
}
