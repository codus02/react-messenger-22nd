// src/features/chat/hooks/useLocalMessages.ts
import { useReducer, useEffect, useCallback } from 'react';
import { updateChatList } from './useChatList'; // 추가

export type TextMessage = {
  id: string;
  kind: 'text';
  chatId: string;
  userId: string;
  text: string;
  createdAt: string;
};

type State = {
  messages: TextMessage[];
  isLoading: boolean;
};

type Action =
  | { type: 'LOAD_MESSAGES'; payload: TextMessage[] }
  | { type: 'ADD_MESSAGE'; payload: TextMessage }
  | { type: 'SET_LOADING'; payload: boolean };

function messagesReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOAD_MESSAGES':
      return {
        ...state,
        messages: action.payload,
        isLoading: false,
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

const initialState: State = {
  messages: [],
  isLoading: true,
};

export function useLocalMessages(chatId: string, meId: string, seed: TextMessage[]) {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });

    const storageKey = `messages:${chatId}`;
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved) as TextMessage[];
        dispatch({ type: 'LOAD_MESSAGES', payload: parsed });
      } catch (error) {
        console.error('Failed to parse messages:', error);
        dispatch({ type: 'LOAD_MESSAGES', payload: seed });
      }
    } else {
      dispatch({ type: 'LOAD_MESSAGES', payload: seed });
      localStorage.setItem(storageKey, JSON.stringify(seed));
    }
  }, [chatId, seed]);

  useEffect(() => {
    if (!state.isLoading && state.messages.length > 0) {
      const storageKey = `messages:${chatId}`;
      localStorage.setItem(storageKey, JSON.stringify(state.messages));
    }
  }, [chatId, state.messages, state.isLoading]);

  const sendText = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const newMessage: TextMessage = {
        id: `m_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        kind: 'text',
        chatId,
        userId: meId,
        text: text.trim(),
        createdAt: new Date().toISOString(),
      };

      dispatch({ type: 'ADD_MESSAGE', payload: newMessage });

      // 🆕 채팅 목록도 업데이트
      updateChatList(chatId, text.trim());
    },
    [chatId, meId],
  );

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    sendText,
  };
}
