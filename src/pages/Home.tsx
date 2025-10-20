// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import MenuTab from '@/layouts/MenuTab';
import Header from '@/components/home/Header';
import MyProfile from '@/components/home/MyProfile';
import Friendsearch from '@/components/home/FriendSearch';
import MiniProfile from '@/components/home/MiniProfile';
import FriendList from '@/components/home/FriendList';

export default function Home() {
  const [showMiniProfile, setShowMiniProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.no-scrollbar') as HTMLElement;
      if (scrollContainer) {
        // 스크롤이 150px 이상 내려가면 미니프로필 표시
        setShowMiniProfile(scrollContainer.scrollTop > 150);
      }
    };

    const scrollContainer = document.querySelector('.no-scrollbar');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // 빈 배열로 한 번만 실행

  return (
    <MenuTab>
      {/* 스크롤 전: Header + MyProfile + Friendsearch 보임 */}
      {/* 스크롤 후: 모두 숨겨짐 */}
      {!showMiniProfile && (
        <>
          <Header />
          <MyProfile />
          <Friendsearch />
          <div className="h-6" />
        </>
      )}

      {/* 스크롤 후: MiniProfile이 상태창 바로 아래 고정 */}
      {showMiniProfile && (
        <div className="sticky top-0 z-10 bg-[var(--white)]">
          <MiniProfile />
        </div>
      )}

      {/* 친구목록은 항상 표시 */}
      <FriendList />
    </MenuTab>
  );
}
