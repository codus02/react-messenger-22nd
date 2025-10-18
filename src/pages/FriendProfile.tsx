// src/pages/FriendProfile.tsx
import { useNavigate, useParams } from 'react-router-dom';
import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';

export default function FriendProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <>
      <StatusBar />
      <HeaderBar title="프로필" onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-auto bg-[var(--white)] p-4">
        <h1 className="text-xl font-bold">친구 프로필</h1>
        <p>userId: {userId}</p>
        {/* 여기에 프로필 내용 추가 예정 */}
      </div>
    </>
  );
}
