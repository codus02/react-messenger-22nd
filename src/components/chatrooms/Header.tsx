// src/components/chatrooms/Header.tsx
import { Icon } from '@/components/Icon';

type Props = {
  activeTab: 'friend' | 'business';
  setActiveTab: (tab: 'friend' | 'business') => void;
};

export default function Header({ activeTab, setActiveTab }: Props) {
  return (
    <div className="flex h-[52px] items-center justify-between bg-[var(--white)] px-4">
      {/* 왼쪽: 대화 텍스트 */}
      <h1 className="text-[20px] font-semibold text-[#222]">대화</h1>

      {/* 오른쪽: 아이콘들 + 탭 */}
      <div className="flex items-center gap-4">
        <Icon name="image" className="h-6 w-6" />
        <Icon name="chatplus" className="h-6 w-6" />

        {/* 탭 컨테이너 */}
        <div className="flex items-center gap-0 rounded-full bg-[var(--green-300)] p-1">
          {/* 친구 탭 */}
          <button
            onClick={() => setActiveTab('friend')}
            className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
              activeTab === 'friend'
                ? 'bg-[var(--white)] text-[var(--green-400)]'
                : 'bg-transparent text-[var(--white)]'
            }`}
          >
            친구
          </button>

          {/* 비즈니스 탭 */}
          <button
            onClick={() => setActiveTab('business')}
            className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
              activeTab === 'business'
                ? 'bg-[var(--white)] text-[var(--green-400)]'
                : 'bg-transparent text-[var(--white)]'
            }`}
          >
            비즈니스
          </button>
        </div>
      </div>
    </div>
  );
}
