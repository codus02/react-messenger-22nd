// src/components/chat/ChatInput.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { Icon } from '@/components/Icon';

type Props = {
  onSend: (text: string) => Promise<void> | void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('');
  const taRef = useRef<HTMLTextAreaElement>(null);

  // 스펙
  const BAR_MIN = 56; // 바 최소 높이 (1줄: 40 + 상하 패딩 8*2)
  const W_EMPTY = 167; // 입력 전 텍스트 영역 가로
  const W_TYPED = 239; // 입력 후 텍스트 영역 가로
  const ONE_H = 40; // 1줄 입력칸 높이
  const TWO_H = 60; // 2줄 입력칸 높이
  const BAR_PADY = 8; // 바 전체의 상하 패딩
  const H_PADX = 32; // 버블 좌우 padding 16+16
  const ONE_PADY = 4; // 1줄 입력칸 내부 상하 padding
  const TWO_PADY = 8; // 2줄 입력칸 내부 상하 padding

  const [boxH, setBoxH] = useState<number>(ONE_H);
  const hasText = value.trim().length > 0;

  const autoResize = () => {
    const el = taRef.current;
    if (!el) return;

    const measureWidth = hasText ? W_TYPED : W_EMPTY;
    el.style.width = `${measureWidth}px`;

    el.style.height = 'auto';

    const cs = window.getComputedStyle(el);
    const lineH = parseFloat(cs.lineHeight) || 20;
    const padV = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const borderV = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
    const EPS = 6;
    const oneLineThreshold = lineH + padV + borderV + EPS;

    const contentH = el.scrollHeight;

    // 1줄: 32px 텍스트 영역, 2줄: 44px 텍스트 영역 (60 - 8 - 8)
    const target = contentH > oneLineThreshold ? TWO_H : ONE_H;
    setBoxH(target);

    // textarea 최대 높이 제한
    const maxTextAreaHeight = target === TWO_H ? 44 : 32;
    el.style.height = `${Math.min(contentH, maxTextAreaHeight)}px`;
    el.style.maxHeight = `${maxTextAreaHeight}px`;
    el.style.overflowY = contentH > maxTextAreaHeight ? 'auto' : 'hidden';
  };

  useEffect(() => {
    autoResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // 현재 줄 수에 따른 패딩 계산
  const currentPadY = boxH === TWO_H ? TWO_PADY : ONE_PADY;

  return (
    <div
      className="flex items-center bg-[var(--white)] px-4"
      style={{
        minHeight: BAR_MIN,
        height: boxH + BAR_PADY * 2, // 입력칸 높이 + 위아래 패딩 8px씩
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
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="이미지">
            <Icon name="image" className="h-6 w-6" alt="이미지" />
          </button>
        </>
      ) : (
        <button type="button" className="grid h-6 w-6 place-items-center" aria-label="닫기">
          <Icon name="arrow-down-2" className="h-6 w-6" alt="닫기" />
        </button>
      )}

      {/* 입력칸 */}
      <div className="flex flex-1 justify-center">
        <div
          className="rounded-full bg-[var(--gray-100)]"
          style={{
            width: (hasText ? W_TYPED : W_EMPTY) + H_PADX,
            height: boxH,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: `${currentPadY}px`,
            paddingBottom: `${currentPadY}px`,
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
            aria-label="메시지 입력"
            className={[
              'no-scrollbar',
              'text-body2-medium',
              'resize-none',
              'bg-transparent',
              'leading-5',
              'break-words',
              'whitespace-pre-wrap',
              'text-[color:var(--gray-800)]',
              'placeholder-[color:var(--gray-400)]',
              'outline-none',
              'p-0',
              'box-border',
            ].join(' ')}
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
