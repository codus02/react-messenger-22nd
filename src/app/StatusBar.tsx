// src/app/StatusBar.tsx
import { Icon } from '@/components/Icon';

type Props = {
  theme?: 'dark' | 'light';
};

export default function StatusBar({ theme = 'dark' }: Props) {
  const textColor = theme === 'light' ? 'text-white' : 'text-black';

  return (
    <div className="flex h-11 items-center justify-between px-4">
      {/* 왼쪽: 시간 */}
      <span className={`text-[14px] font-semibold ${textColor}`}>
        {new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false })}
      </span>

      {/* 오른쪽: 아이콘들 */}
      <div className="flex items-center gap-1">
        <div style={{ filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none' }}>
          <Icon name="signal" className="h-4 w-4" />
        </div>
        <div style={{ filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none' }}>
          <Icon name="connection" className="h-4 w-4" />
        </div>
        <div style={{ filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none' }}>
          <Icon name="battery" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
