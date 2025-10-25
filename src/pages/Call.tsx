// src/pages/Call.tsx
import MenuTab from '@/layouts/MenuTab';
import { SyncLoader } from 'react-spinners';

export default function Call() {
  return (
    <MenuTab>
      <div className="flex h-full flex-1 items-center justify-center">
        <SyncLoader color="var(--gray-700)" size={15} margin={8} aria-label="Loading Spinner" />
      </div>
    </MenuTab>
  );
}
