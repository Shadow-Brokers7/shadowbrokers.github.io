import React from 'react';
import { format } from 'date-fns';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isSupport = message.sender === 'support';
  
  return (
    <div
      className={`flex ${isSupport ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isSupport
            ? 'bg-gray-200 text-gray-800'
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-75 mt-1 block">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;