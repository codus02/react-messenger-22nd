// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Chats from '@/pages/Chats';
import Call from '@/pages/Call';
import More from '@/pages/More';
import ChatRoom from '@/pages/ChatRoom';
import MobileFrame from '@/layouts/MobileFrame';
import ErrorBoundary from '@/components/dev/ErrorBoundary';

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* 홈 */}
          <Route
            path="/"
            element={
              <MobileFrame>
                <Home />
              </MobileFrame>
            }
          />

          {/* 채팅 목록 */}
          <Route
            path="/chats"
            element={
              <MobileFrame>
                <Chats />
              </MobileFrame>
            }
          />

          {/* 전화 */}
          <Route
            path="/call"
            element={
              <MobileFrame>
                <Call />
              </MobileFrame>
            }
          />

          {/* 더보기 */}
          <Route
            path="/more"
            element={
              <MobileFrame>
                <More />
              </MobileFrame>
            }
          />

          {/* 개별 채팅방 */}
          <Route
            path="/chat/:chatId"
            element={
              <MobileFrame>
                <ChatRoom />
              </MobileFrame>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
