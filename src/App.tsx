// src/App.tsx - MyProfile만 bottomBarBg={false} 제거
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
          <Route
            path="/"
            element={
              <MobileFrame>
                <Home />
              </MobileFrame>
            }
          />
          <Route
            path="/chats"
            element={
              <MobileFrame>
                <Chats />
              </MobileFrame>
            }
          />
          <Route
            path="/call"
            element={
              <MobileFrame>
                <Call />
              </MobileFrame>
            }
          />
          <Route
            path="/more"
            element={
              <MobileFrame>
                <More />
              </MobileFrame>
            }
          />
          <Route
            path="/chat/:chatId"
            element={
              <MobileFrame>
                <ChatRoom />
              </MobileFrame>
            }
          />
          <Route
            path="/profile/me"
            element={
              <MobileFrame>
                <MyProfile />
              </MobileFrame>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <MobileFrame>
                <FriendProfile />
              </MobileFrame>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
