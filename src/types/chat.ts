export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  addMessage: (content: string, sender: 'user' | 'support') => void;
  toggleChat: () => void;
}