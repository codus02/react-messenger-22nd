// src/pages/More.tsx
import MenuTab from '@/layouts/MenuTab';

export default function More() {
  const text = '더 많은 기능들 COMING SOON...';

  return (
    <MenuTab>
      <div className="flex h-full flex-col items-center justify-center bg-[var(--white)]">
        {/* 외부 고정 컨테이너 */}
        <div
          style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            margin: '0 auto',
          }}
        >
          {/* 내부 회전 컨테이너 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              animation: 'spin 10s linear infinite',
            }}
          >
            {text.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 0.5em)',
                  top: 'calc(50% - 0.5em)',
                  width: '1em',
                  height: '1em',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--gray-500)',
                  textAlign: 'center',
                  transform: `rotate(${(360 / text.length) * index}deg) translateY(-70px)`,
                  transformOrigin: '0.5em 0.5em',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

          {/* 중앙 점들 */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              gap: '6px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gray-500)',
                  animation: `bounce ${1.4}s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            40% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </MenuTab>
  );
}
