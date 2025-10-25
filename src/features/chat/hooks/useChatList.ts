// src/features/chat/hooks/useChatList.ts
import { useState, useEffect } from 'react';
import chatListData from '@/data/chatList.json';

// 타입 정의 수정
type ChatRoom = {
  id: number;
  chatId: string | null;
  profileImage: string; // avatarUrl → profileImage
  roomName: string; // name → roomName
  memberCount: number | null;
  lastMessage: string;
  time: string;
  unreadCount: number;
  type: 'business' | 'friend';
};

const STORAGE_KEY = 'chatList';

export function useChatList() {
  const [chatList, setChatList] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setChatList(JSON.parse(saved));
      } catch {
        setChatList(chatListData as ChatRoom[]);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chatListData));
      }
    } else {
      setChatList(chatListData as ChatRoom[]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chatListData));
    }
  }, []);

  // storage 이벤트 리스너
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setChatList(JSON.parse(saved));
        } catch (error) {
          console.error('Failed to parse chat list:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('chatListUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('chatListUpdated', handleStorageChange);
    };
  }, []);

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
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const chatList: ChatRoom[] = JSON.parse(saved);
    const chatIndex = chatList.findIndex((chat) => chat.chatId === chatId);

    if (chatIndex !== -1) {
      const now = new Date();
      const time = formatTime(now);

      // 해당 채팅방 업데이트
      chatList[chatIndex] = {
        ...chatList[chatIndex],
        lastMessage,
        time,
      };

      // 로컬스토리지에 저장
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chatList));

      // 커스텀 이벤트 발생
      window.dispatchEvent(new Event('chatListUpdated'));
    }
  } catch (error) {
    console.error('Failed to update chat list:', error);
  }
}
