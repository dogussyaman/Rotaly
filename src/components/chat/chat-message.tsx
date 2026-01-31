import React from 'react';

interface ChatMessageProps {
  message: string;
  isLoading?: boolean;
}

const formatMessage = (message: string) => {
  // Eğer mesajda otel bilgileri varsa (🏨 ile başlayan satırlar)
  if (message.includes('🏨')) {
    return message
      .split('\n')
      .map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return null;
        
        // Otel başlığı
        if (trimmedLine.includes('🏨')) {
          return (
            <div key={index} className="font-semibold text-blue-600 mb-2 mt-4 first:mt-0">
              {trimmedLine}
            </div>
          );
        }
        
        // Ayırıcı çizgi
        if (trimmedLine === '---') {
          return <hr key={index} className="my-3 border-gray-200" />;
        }
        
        // Diğer satırlar (📍, 🏢, ⭐, 💰, 🎯, 📝)
        return (
          <div key={index} className="text-sm text-gray-700 mb-1">
            {trimmedLine}
          </div>
        );
      })
      .filter(Boolean);
  }
  
  // Normal mesajlar için satır sonlarını koru
  return message.split('\n').map((line, index) => (
    <div key={index} className={index > 0 ? "mt-1" : ""}>
      {line || <br />}
    </div>
  ));
};

export default function ChatMessage({ message, isLoading = false }: ChatMessageProps) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    );
  }

  return (
    <div className="whitespace-pre-wrap">
      {formatMessage(message)}
    </div>
  );
}