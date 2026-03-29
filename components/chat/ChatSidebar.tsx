/**
 * Chat Sidebar Component
 * Shows conversation history and allows creating new chats
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Trash2, 
  MoreHorizontal,
  History,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useChatStore, type ChatSession } from '@/stores/useChatStore';
import { useTranslations } from 'next-intl';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const t = useTranslations('chat');
  const { 
    sessions, 
    currentSessionId, 
    createSession, 
    setCurrentSession, 
    deleteSession,
    clearAllSessions
  } = useChatStore();
  
  const handleNewChat = () => {
    createSession();
  };
  
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 86400000) { // Less than 24 hours
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diff < 604800000) { // Less than 7 days
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black lg:hidden z-40"
          />
          
          {/* Sidebar */}
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'fixed left-0 top-0 bottom-0 w-80 z-50',
              'bg-background border-r shadow-xl',
              'flex flex-col'
            )}
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-muted-foreground" />
                <h2 className="font-semibold">{t('history')}</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* New chat button */}
            <div className="p-3">
              <Button onClick={handleNewChat} className="w-full" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                {t('newChat')}
              </Button>
            </div>
            
            {/* Sessions list */}
            <ScrollArea className="flex-1 px-3">
              <div className="space-y-1 py-2">
                {sessions.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">{t('noConversations')}</p>
                  </div>
                ) : (
                  sessions.map(session => (
                    <SessionItem
                      key={session.id}
                      session={session}
                      isActive={session.id === currentSessionId}
                      onSelect={() => {
                        setCurrentSession(session.id);
                        onClose();
                      }}
                      onDelete={() => deleteSession(session.id)}
                      formatDate={formatDate}
                    />
                  ))
                )}
              </div>
            </ScrollArea>
            
            {/* Footer */}
            {sessions.length > 0 && (
              <div className="p-3 border-t">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllSessions}
                  className="w-full text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t('clearAll')}
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

interface SessionItemProps {
  session: ChatSession;
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
  formatDate: (timestamp: number) => string;
}

function SessionItem({ 
  session, 
  isActive, 
  onSelect, 
  onDelete,
  formatDate 
}: SessionItemProps) {
  const [showActions, setShowActions] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        'group relative p-3 rounded-lg cursor-pointer transition-colors',
        isActive ? 'bg-primary/10' : 'hover:bg-muted'
      )}
      onClick={onSelect}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start gap-3">
        <MessageCircle className={cn(
          'w-4 h-4 mt-0.5 shrink-0',
          isActive ? 'text-primary' : 'text-muted-foreground'
        )} />
        <div className="flex-1 min-w-0">
          <p className={cn(
            'text-sm truncate',
            isActive && 'font-medium'
          )}>
            {session.title}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {session.messages.length} messages • {formatDate(session.updatedAt)}
          </p>
        </div>
      </div>
      
      {/* Delete button */}
      <AnimatePresence>
        {showActions && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2',
              'p-1.5 rounded-md hover:bg-destructive/10 hover:text-destructive',
              'transition-colors'
            )}
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
