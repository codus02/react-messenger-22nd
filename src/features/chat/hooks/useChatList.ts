// src/features/chat/hooks/useChatList.ts
import { useState, useEffect, useCallback } from 'react';
import chatListData from '@/data/chatList.json';

type ChatRoom = {
  id: number;
  chatId: string | null;
  profileImage: string;
  roomName: string;
  memberCount: number | null;
  lastMessage: string;
  time: string;
  unreadCount: number;
  type: 'business' | 'friend';
};

const STORAGE_KEY = 'chatList';

export function useChatList() {
  const [chatList, setChatList] = useState<ChatRoom[]>([]);

  // 로컬스토리지에서 불러오는 함수
  const loadChatList = useCallback(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatRoom[];
        setChatList(parsed);
        console.log('✅ Chat list loaded:', parsed); // 디버깅
        return;
      } catch (error) {
        console.error('Failed to parse chat list:', error);
      }
    }
    // 저장된 데이터 없으면 초기 데이터 사용
    setChatList(chatListData as ChatRoom[]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatListData));
  }, []);

  // 초기 로드
  useEffect(() => {
    loadChatList();
  }, [loadChatList]);

  // storage 이벤트 리스너
  useEffect(() => {
    const handleStorageChange = (e?: StorageEvent) => {
      console.log('🔄 Storage event triggered:', e?.key); // 디버깅
      loadChatList();
    };

    const handleCustomEvent = () => {
      console.log('🔄 Custom event triggered'); // 디버깅
      loadChatList();
    };

    // 다른 탭에서의 변경 감지
    window.addEventListener('storage', handleStorageChange);

    // 같은 탭에서의 변경 감지 (커스텀 이벤트)
    window.addEventListener('chatListUpdated', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('chatListUpdated', handleCustomEvent);
    };
  }, [loadChatList]);

  return chatList;
}

// 시간 포맷 함수
function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? '오후' : '오전';
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`;
}

// 채팅 목록 업데이트 함수
export function updateChatList(chatId: string, lastMessage: string) {
  console.log('📝 Updating chat list for:', chatId, lastMessage); // 디버깅

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    console.error('❌ No chat list found in storage');
    return;
  }

  try {
    const chatList: ChatRoom[] = JSON.parse(saved);
    const chatIndex = chatList.findIndex((chat) => chat.chatId === chatId);

    console.log('🔍 Found chat at index:', chatIndex); // 디버깅

    if (chatIndex !== -1) {
      const now = new Date();
      const time = formatTime(now);

      // 해당 채팅방 업데이트
      chatList[chatIndex] = {
        ...chatList[chatIndex],
        lastMessage,
        time,
      };

      console.log('✅ Updated chat:', chatList[chatIndex]); // 디버깅

      // 로컬스토리지에 저장
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chatList));

      // 커스텀 이벤트 발생
      const event = new Event('chatListUpdated');
      window.dispatchEvent(event);

      console.log('🚀 Event dispatched'); // 디버깅
    } else {
      console.error('❌ Chat not found with chatId:', chatId);
    }
  } catch (error) {
    console.error('❌ Failed to update chat list:', error);
  }
}
