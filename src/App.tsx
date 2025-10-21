// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Chats from '@/pages/Chats';
import Call from '@/pages/Call';
import More from '@/pages/More';
import ChatRoom from '@/pages/ChatRoom';
import MyProfile from '@/pages/MyProfile';
import FriendProfile from '@/pages/FriendProfile';
import MobileFrame from '@/layouts/MobileFrame';
import ErrorBoundary from '@/components/dev/ErrorBoundary';

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* 홈 - 흰색 하단바 */}
          <Route
            path="/"
            element={
              <MobileFrame bottomBarBg="white">
                <Home />
              </MobileFrame>
            }
          />

          {/* 채팅 목록 - 흰색 하단바 */}
          <Route
            path="/chats"
            element={
              <MobileFrame bottomBarBg="white">
                <Chats />
              </MobileFrame>
            }
          />

          {/* 전화 - 흰색 하단바 */}
          <Route
            path="/call"
            element={
              <MobileFrame bottomBarBg="white">
                <Call />
              </MobileFrame>
            }
          />

          {/* 더보기 - 흰색 하단바 */}
          <Route
            path="/more"
            element={
              <MobileFrame bottomBarBg="white">
                <More />
              </MobileFrame>
            }
          />

          {/* 채팅방 - 흰색 하단바 */}
          <Route
            path="/chat/:chatId"
            element={
              <MobileFrame bottomBarBg="white">
                <ChatRoom />
              </MobileFrame>
            }
          />

          {/* 내 프로필 - 투명 하단바 */}
          <Route
            path="/profile/me"
            element={
              <MobileFrame bottomBarBg="transparent">
                <MyProfile />
              </MobileFrame>
            }
          />

          {/* 친구 프로필 - 흰색 하단바 */}
          <Route
            path="/profile/:userId"
            element={
              <MobileFrame bottomBarBg="white">
                <FriendProfile />
              </MobileFrame>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
