/**
 * Chat Input Component
 * Handles user message input with suggestions
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  suggestions?: string[];
}

export function ChatInput({ 
  onSend, 
  isLoading = false, 
  placeholder,
  suggestions = []
}: ChatInputProps) {
  const t = useTranslations('chat');
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [message]);
  
  const handleSubmit = () => {
    const trimmed = message.trim();
    if (trimmed && !isLoading) {
      onSend(trimmed);
      setMessage('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    onSend(suggestion);
  };
  
  // Default suggestions
  const defaultSuggestions = [
    t('suggestions.teach'),
    t('suggestions.practice'),
    t('suggestions.explain'),
    t('suggestions.help'),
  ];
  
  const displaySuggestions = suggestions.length > 0 ? suggestions : defaultSuggestions;
  
  return (
    <div className="space-y-3">
      {/* Suggestions */}
      <AnimatePresence>
        {!message && displaySuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-wrap gap-2"
          >
            {displaySuggestions.slice(0, 4).map((suggestion, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSuggestionClick(suggestion)}
                disabled={isLoading}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-full border',
                  'bg-muted/50 hover:bg-muted transition-colors',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                <Sparkles className="w-3 h-3 inline mr-1 text-amber-500" />
                {suggestion}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Input area */}
      <div className="relative flex items-end gap-2 p-3 rounded-2xl bg-muted/50 border">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('inputPlaceholder')}
          disabled={isLoading}
          rows={1}
          className={cn(
            'flex-1 bg-transparent resize-none outline-none',
            'text-sm placeholder:text-muted-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'min-h-[40px] max-h-[150px]'
          )}
        />
        
        <Button
          size="icon"
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading}
          className={cn(
            'shrink-0 rounded-xl',
            message.trim() ? 'bg-primary' : 'bg-muted'
          )}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Helper text */}
      <p className="text-xs text-muted-foreground text-center">
        {t('helperText')}
      </p>
    </div>
  );
}
