// src/app/BottomIndicator.tsx
export default function BottomIndicator() {
  return (
    <div className="flex h-[34px] items-center justify-center">
      {/* 배경 투명 - 부모의 배경색 상속 */}
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
