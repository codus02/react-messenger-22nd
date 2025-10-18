// src/app/BottomIndicator.tsx
export default function BottomIndicator() {
  return (
    <div className="flex h-[34px] items-center justify-center">
      {/* 검은 바만 - 배경 투명 */}
      <div
        className="rounded-full"
        style={{
          width: '134px',
          height: '5px',
          backgroundColor: 'var(--black)',
        }}
      />
    </div>
  );
}
