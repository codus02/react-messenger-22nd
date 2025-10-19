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
    const scrollContainer = document.getElementById('menu-tab-scroll');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const myProfile = document.getElementById('my-profile');
      if (myProfile) {
        const rect = myProfile.getBoundingClientRect();
        // StatusBar(44px) 아래로 큰 프로필이 사라지면 표시
        setShowMiniProfile(rect.bottom < 44);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MenuTab>
      {/* Header - 항상 최상단 */}
      <div className="sticky top-0 z-20 bg-[var(--white)]">
        <Header />
      </div>

      {/* MiniProfile - 조건부 표시 */}
      {showMiniProfile && (
        <div className="sticky top-0 z-10 bg-[var(--white)]">
          <MiniProfile />
        </div>
      )}

      {/* 큰 프로필 */}
      <div id="my-profile">
        <MyProfile />
      </div>

      <Friendsearch />
      <div className="h-6" />
      <FriendList />
    </MenuTab>
  );
}
