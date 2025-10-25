// src/components/chat/ChatInput.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { Icon } from '@/components/Icon';

type Props = {
  onSend: (text: string) => Promise<void> | void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('');
  const taRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // 파일 input ref 추가

  // 스펙
  const BAR_MIN = 56;
  const W_EMPTY = 167;
  const W_TYPED = 239;
  const ONE_H = 40;
  const TWO_H = 60;
  const BAR_PADY = 8;
  const ONE_PADY = 4;
  const TWO_PADY = 8;

  const [boxH, setBoxH] = useState<number>(ONE_H);
  const hasText = value.trim().length > 0;

  const autoResize = () => {
    const el = taRef.current;
    if (!el) return;

    el.style.width = `${hasText ? W_TYPED : W_EMPTY}px`;
    el.style.height = 'auto';

    const cs = window.getComputedStyle(el);
    const lineH = parseFloat(cs.lineHeight) || 20;
    const padV = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const borderV = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
    const EPS = 6;
    const oneLineThreshold = lineH + padV + borderV + EPS;

    const contentH = el.scrollHeight;
    const target = contentH > oneLineThreshold ? TWO_H : ONE_H;
    setBoxH(target);

    const maxTextAreaHeight = target === TWO_H ? 44 : 32;
    el.style.height = `${Math.min(contentH, maxTextAreaHeight)}px`;
    el.style.maxHeight = `${maxTextAreaHeight}px`;
    el.style.overflowY = contentH > maxTextAreaHeight ? 'auto' : 'hidden';
  };

  useEffect(() => {
    autoResize();
  }, [value]);

  const send = useCallback(async () => {
    const text = value.trim();
    if (!text) return;
    await onSend(text);
    setValue('');
    taRef.current?.focus();
  }, [onSend, value]);

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  // 파일 선택 핸들러
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('선택된 파일:', files[0]);
      // 파일 업로드 로직 추가 가능
    }
  };

  const currentPadY = boxH === TWO_H ? TWO_PADY : ONE_PADY;

  return (
    <div
      className="flex items-center bg-[var(--white)] px-4"
      style={{
        minHeight: BAR_MIN,
        height: boxH + BAR_PADY * 2,
        gap: '12px',
        paddingTop: `${BAR_PADY}px`,
        paddingBottom: `${BAR_PADY}px`,
      }}
    >
      {/* 좌측 아이콘들 */}
      {!hasText ? (
        <>
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="추가">
            <Icon name="cross" className="h-6 w-6" alt="추가" />
          </button>
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="카메라">
            <Icon name="camera" className="h-6 w-6" alt="카메라" />
          </button>
          <button
            type="button"
            onClick={handleImageClick}
            className="grid h-6 w-6 cursor-pointer place-items-center hover:opacity-70"
            aria-label="이미지"
          >
            <div style={{ pointerEvents: 'none' }}>
              <Icon name="image" className="h-6 w-6" alt="이미지" />
            </div>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </>
      ) : (
        <button type="button" className="grid h-6 w-6 place-items-center" aria-label="닫기">
          <Icon name="arrow-down-2" className="h-6 w-6" alt="닫기" />
        </button>
      )}

      {/* 입력칸 - 중앙 정렬 및 border-radius 조건부 */}
      <div className="flex flex-1 justify-center">
        <div
          className="bg-[var(--gray-100)]"
          style={{
            width: (hasText ? W_TYPED : W_EMPTY) + 32,
            height: boxH,
            padding: `${currentPadY}px 16px`,
            borderRadius: hasText ? '20px' : '12px', // 조건부 border-radius
            display: 'flex',
            alignItems: 'center', // 수직 중앙 정렬
            transition: 'width 120ms ease, height 120ms ease',
          }}
        >
          <textarea
            ref={taRef}
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="메시지를 입력하세요"
            className="no-scrollbar text-body2-medium resize-none bg-transparent p-0 leading-5 break-words whitespace-pre-wrap text-[color:var(--gray-800)] placeholder-[color:var(--gray-400)] outline-none"
            style={{ width: hasText ? W_TYPED : W_EMPTY }}
          />
        </div>
      </div>

      {/* 우측 아이콘 */}
      {hasText ? (
        <button
          type="button"
          onClick={() => void send()}
          className="grid h-6 w-6 cursor-pointer place-items-center"
          aria-label="전송"
        >
          <Icon name="send" className="h-6 w-6" alt="전송" />
        </button>
      ) : (
        <button type="button" className="grid h-6 w-6 place-items-center" aria-label="음성">
          <Icon name="voice" className="h-6 w-6" alt="음성" />
        </button>
      )}
    </div>
  );
}
