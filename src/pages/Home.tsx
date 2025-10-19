// src/pages/Home.tsx
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/home/Header';
import MyProfile from '@/components/home/MyProfile';
import Friendsearch from '@/components/home/FriendSearch';
import FriendList from '@/components/home/FriendList';

export default function Home() {
  return (
    <MenuTab>
      {/* 고정 영역 */}
      <div className="sticky top-0 z-10 bg-[var(--white)] pb-6">
        <Header />
        <MyProfile />
        <Friendsearch />
      </div>

      {/* 스크롤 영역 - no-scrollbar 추가 */}
      <div className="no-scrollbar flex-1 overflow-auto">
        <FriendList />
      </div>
    </MenuTab>
  );
}
