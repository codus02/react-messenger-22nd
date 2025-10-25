// src/pages/Profile.tsx
import { useParams } from 'react-router-dom';
import type { User } from '@/types/chat';
import usersData from '@/data/users.json';

export default function Profile() {
  const { userId } = useParams<{ userId: string }>();
  // const navigate = useNavigate();

  const usersById: Record<string, User> = usersData;

  // ✅ 타입 명시
  const user = Object.values(usersById).find((u: User) => u.id === userId);

  // 또는
  //const user2 = Object.entries(usersById).find(([id, u]: [string, User]) => id === userId)?.[1];

  if (!user) {
    return <div>사용자를 찾을 수 없습니다.</div>;
  }

  return <div>{/* 프로필 내용 */}</div>;
}
