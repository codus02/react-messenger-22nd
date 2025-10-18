// src/components/home/MyProfile.tsx
import myProfileUrl from '@/icons/my-profile.svg';

export default function MyProfile() {
  return (
    <div className="flex items-center justify-between bg-[var(--white)] p-4">
      {/* 왼쪽: 텍스트 영역 */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-semibold text-[#222]">세오스</h2>
        <p className="text-[14px] font-medium text-[var(--gray-600)]">메신저 서비스 리디자인</p>
      </div>

      {/* 오른쪽: 프로필 이미지 */}
      <img src={myProfileUrl} alt="프로필" className="h-[68px] w-[68px] rounded-[18px] object-cover" />
    </div>
  );
}
