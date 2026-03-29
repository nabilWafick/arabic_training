/**
 * Chat Message Component
 * Displays individual chat messages with proper formatting
 */

'use client';

import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChatMessage as ChatMessageType } from '@/stores/useChatStore';

interface ChatMessageProps {
  message: ChatMessageType;
  isLast?: boolean;
}

export function ChatMessage({ message, isLast }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  // Format the message content - handle markdown-like formatting
  const formatContent = (content: string) => {
    // Replace **text** with bold
    let formatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace Arabic text patterns for better display
    formatted = formatted.replace(/(\p{Script=Arabic}+)/gu, '<span class="font-arabic text-lg" dir="rtl">$1</span>');
    return formatted;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'flex gap-3 p-4',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
          isUser 
            ? 'bg-primary text-primary-foreground'
            : 'bg-gradient-to-br from-amber-500 to-amber-600 text-white'
        )}
      >
        {isUser ? (
          <User className="w-5 h-5" />
        ) : (
          <span className="font-arabic text-lg">م</span>
        )}
      </div>
      
      {/* Message content */}
      <div
        className={cn(
          'flex-1 max-w-[80%]',
          isUser ? 'text-right' : 'text-left'
        )}
      >
        <div
          className={cn(
            'inline-block p-4 rounded-2xl',
            isUser
              ? 'bg-primary text-primary-foreground rounded-tr-none'
              : 'bg-muted rounded-tl-none'
          )}
        >
          <div
            className="text-sm leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
          />
        </div>
        
        {/* Timestamp */}
        <div className={cn(
          'text-xs text-muted-foreground mt-1',
          isUser ? 'text-right' : 'text-left'
        )}>
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </motion.div>
  );
}

// Typing indicator component
export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-3 p-4"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shrink-0">
        <span className="font-arabic text-lg text-white">م</span>
      </div>
      <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
