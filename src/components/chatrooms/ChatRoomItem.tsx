// src/components/chatrooms/ChatRoomItem.tsx
import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

type Props = {
  profileImage?: string;
  roomName: string;
  memberCount: number;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  chatId?: string;
};

export default function ChatRoomItem({
  profileImage = 'default-profile',
  roomName,
  memberCount,
  lastMessage,
  time,
  unreadCount = 0,
  chatId,
}: Props) {
  const navigate = useNavigate();

  const renderMessage = () => {
    const lines = lastMessage.split('\n');
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));
  };

  const messageColor = unreadCount > 0 ? 'var(--gray-800)' : 'var(--gray-500)';

  const handleClick = () => {
    if (chatId) {
      navigate(`/chat/${chatId}`);
    }
  };

  // chatId가 있을 때만 클릭 가능
  const isClickable = !!chatId;

  return (
    <div
      className={`flex min-h-[64px] w-[343px] items-start gap-4 py-2 transition-colors ${
        isClickable ? 'cursor-pointer hover:bg-[var(--gray-50)]' : ''
      }`}
      onClick={isClickable ? handleClick : undefined}
    >
      {/* 프로필 이미지 */}
      <div className="h-16 w-16 flex-shrink-0">
        <Icon name={profileImage} className="h-full w-full rounded-lg object-cover" />
      </div>

      {/* 오른쪽 정보 영역 */}
      <div className="flex flex-1 flex-col gap-1">
        {/* 상단: 제목 + 인원수 + 시간 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-semibold text-[#222]">{roomName}</span>
            <span className="text-[14px] font-normal text-[var(--gray-500)]">{memberCount}</span>
          </div>

          <span className="text-[12px] font-medium text-[var(--gray-400)]">{time}</span>
        </div>

        {/* 하단: 최근 메시지 + 안읽은 수 */}
        <div className="flex items-start justify-between gap-2">
          <div
            className="flex-1 text-[14px] font-medium"
            style={{
              color: messageColor,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {renderMessage()}
          </div>

          {unreadCount > 0 && (
            <div className="flex h-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--green-300)] px-2">
              <span className="text-[12px] font-medium text-white">{unreadCount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
