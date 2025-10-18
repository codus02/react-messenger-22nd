// src/components/chatrooms/Menu.tsx
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@/components/Icon';

type MenuType = 'home' | 'chat' | 'call' | 'more';

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveMenu = (): MenuType => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/chats')) return 'chat';
    if (location.pathname.startsWith('/call')) return 'call';
    if (location.pathname.startsWith('/more')) return 'more';
    return 'chat';
  };

  const activeMenu = getActiveMenu();

  const menus = [
    {
      id: 'home' as MenuType,
      label: '홈',
      icon: 'home',
      iconActive: 'home-dark',
      path: '/',
    },
    {
      id: 'chat' as MenuType,
      label: '대화',
      icon: 'chat',
      iconActive: 'chat-dark',
      path: '/chats',
    },
    {
      id: 'call' as MenuType,
      label: '전화',
      icon: 'call',
      iconActive: 'call',
      path: '/call',
    },
    {
      id: 'more' as MenuType,
      label: '더보기',
      icon: 'vector',
      iconActive: 'vector',
      path: '/more',
    },
  ];

  return (
    <div className="flex h-[57px] bg-[var(--white)]" style={{ width: '376px', marginLeft: '-0.5px' }}>
      {menus.map((menu) => {
        const isActive = activeMenu === menu.id;

        return (
          <button
            key={menu.id}
            onClick={() => navigate(menu.path)}
            className="flex w-[94px] cursor-pointer flex-col items-center justify-center gap-1 py-2"
          >
            {/* 아이콘 - 비활성일 때만 gray-400 */}
            <div
              style={{
                filter: !isActive
                  ? 'brightness(0) saturate(100%) invert(68%) sepia(6%) saturate(371%) hue-rotate(202deg) brightness(92%) contrast(85%)'
                  : 'none',
              }}
            >
              <Icon name={isActive ? menu.iconActive : menu.icon} className="h-6 w-6" />
            </div>

            {/* 텍스트 */}
            <span
              className="text-[12px] font-medium"
              style={{
                color: isActive ? 'var(--black)' : 'var(--gray-400)',
                fontFamily: 'Pretendard',
                letterSpacing: '-0.036px',
                lineHeight: '140%',
              }}
            >
              {menu.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
