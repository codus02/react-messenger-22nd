import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatRoom from '@/pages/ChatRoom'; // ← 추가
import Chats from '@/pages/Chats'; // ← 추가
import MobileFrame from '@/layouts/MobileFrame';
import ErrorBoundary from '@/components/dev/ErrorBoundary';

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* 홈은 채팅 목록으로 */}
          <Route path="/" element={<Navigate to="/chats" replace />} />

          {/* 채팅 목록 페이지 */}
          <Route
            path="/chats"
            element={
              <MobileFrame>
                <Chats />
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
