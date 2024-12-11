import React, { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useChatStore } from '../../store/chatStore';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWidget: React.FC = () => {
  const { isOpen, messages, addMessage, toggleChat } = useChatStore();

  useEffect(() => {
    // Simulate initial support message
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage(
          'Hello! How can we help you today?',
          'support'
        );
      }, 1000);
    }
  }, []);

  const handleSendMessage = (content: string) => {
    addMessage(content, 'user');
    // Simulate support response
    setTimeout(() => {
      addMessage(
        'Thank you for your message. One of our team members will respond shortly.',
        'support'
      );
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
        >
          <MessageCircle size={20} />
          <span>Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="flex h-[500px] w-[350px] flex-col rounded-lg bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
            <h3 className="font-semibold">Shadow Brokers Support</h3>
            <button
              onClick={toggleChat}
              className="rounded-full p-1 hover:bg-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;