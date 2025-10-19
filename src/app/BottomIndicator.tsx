// src/app/BottomIndicator.tsx
export default function BottomIndicator() {
  return (
    <div className="flex h-[34px] items-center justify-center bg-[var(--white)]">
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
