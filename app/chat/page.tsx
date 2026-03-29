/**
 * AI Tutor Chat Page
 * Interactive conversation with Arabic language tutor
 */

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Menu,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Languages
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useChatStore } from '@/stores/useChatStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { ChatMessage, TypingIndicator } from '@/components/chat/ChatMessage';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatSidebar } from '@/components/chat/ChatSidebar';

export default function ChatPage() {
  const t = useTranslations('chat');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { currentPhase } = useProgressStore();
  const { 
    currentSessionId,
    isLoading,
    error,
    createSession,
    getCurrentSession,
    addMessage,
    updateLastAssistantMessage,
    setLoading,
    setError
  } = useChatStore();
  
  const currentSession = getCurrentSession();
  
  // Create initial session if none exists
  useEffect(() => {
    if (!currentSessionId) {
      createSession(undefined, currentPhase);
    }
  }, [currentSessionId, createSession, currentPhase]);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentSession?.messages, isLoading]);
  
  // Send message handler
  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    addMessage({ role: 'user', content });
    
    // Add placeholder assistant message
    addMessage({ role: 'assistant', content: '' });
    
    setLoading(true);
    setError(null);
    
    try {
      // Get conversation history for API
      const conversationHistory = getCurrentSession()?.messages
        .filter(m => m.role !== 'system' && m.content)
        .slice(-10) // Keep last 10 messages for context
        .map(m => ({ role: m.role, content: m.content })) || [];
      
      // Call existing chat API
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          phaseLevel: currentPhase,
          conversationHistory,
          language: locale as 'en' | 'fr' | 'ar',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      if (data.success && data.response) {
        updateLastAssistantMessage(data.response);
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (err) {
      console.error('Chat error:', err);
      setError(t('errorMessage'));
      updateLastAssistantMessage(t('errorMessage'));
    } finally {
      setLoading(false);
    }
  }, [addMessage, getCurrentSession, currentPhase, locale, setLoading, setError, updateLastAssistantMessage, t]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Sidebar */}
      <ChatSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="max-w-4xl mx-auto flex flex-col h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {tNav('dashboard')}
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <span className="font-arabic text-xl text-white">م</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold">{t('title')}</h1>
                <p className="text-xs text-muted-foreground">{t('subtitle')}</p>
              </div>
            </div>
            
            <Badge variant="outline" className="hidden sm:flex">
              {tNav(`phase${currentPhase}`)}
            </Badge>
          </div>
        </header>
        
        {/* Chat area */}
        <ScrollArea ref={scrollRef} className="flex-1">
          <div className="min-h-full flex flex-col">
            {/* Empty state or messages */}
            {currentSession?.messages.length === 0 ? (
              <EmptyState onSuggestionClick={handleSendMessage} />
            ) : (
              <div className="flex-1 py-4">
                {currentSession?.messages.map((message, i) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message} 
                    isLast={i === currentSession.messages.length - 1}
                  />
                ))}
                {isLoading && <TypingIndicator />}
              </div>
            )}
          </div>
        </ScrollArea>
        
        {/* Input area */}
        <div className="sticky bottom-0 bg-background/80 backdrop-blur-lg border-t p-4">
          <ChatInput
            onSend={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

// Empty state component
function EmptyState({ onSuggestionClick }: { onSuggestionClick: (text: string) => void }) {
  const t = useTranslations('chat');
  
  const suggestions = [
    { icon: <BookOpen className="w-5 h-5" />, text: t('suggestions.teach'), color: 'text-blue-500' },
    { icon: <Languages className="w-5 h-5" />, text: t('suggestions.practice'), color: 'text-green-500' },
    { icon: <GraduationCap className="w-5 h-5" />, text: t('suggestions.explain'), color: 'text-purple-500' },
    { icon: <MessageCircle className="w-5 h-5" />, text: t('suggestions.help'), color: 'text-amber-500' },
  ];
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg"
      >
        <span className="font-arabic text-4xl text-white">م</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-2">{t('welcome')}</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          {t('welcomeDescription')}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
        {suggestions.map((suggestion, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            onClick={() => onSuggestionClick(suggestion.text)}
            className={cn(
              'flex items-center gap-3 p-4 rounded-xl border',
              'bg-card hover:bg-muted/50 transition-colors text-left'
            )}
          >
            <div className={cn('p-2 rounded-lg bg-muted', suggestion.color)}>
              {suggestion.icon}
            </div>
            <span className="text-sm font-medium">{suggestion.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
