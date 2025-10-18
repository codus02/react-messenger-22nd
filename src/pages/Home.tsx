// src/pages/Home.tsx
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/home/Header';
import MyProfile from '@/components/home/MyProfile';
import Friendsearch from '@/components/home/FriendSearch';
import FriendList from '@/components/home/FriendList';

export default function Home() {
  return (
    <MenuTab>
      <Header />
      <div className="flex flex-col gap-1">
        <MyProfile />
        <Friendsearch />
      </div>

      <div className="mt-6">
        <FriendList />
      </div>

      {/* flex-1 제거 - MenuTab이 배경 처리 */}
    </MenuTab>
  );
}
