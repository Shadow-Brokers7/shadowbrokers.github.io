import { create } from 'zustand';
import { ChatState } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [],
  addMessage: (content, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          sender,
          timestamp: new Date(),
        },
      ],
    })),
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
}));