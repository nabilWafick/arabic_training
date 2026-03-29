/**
 * Chat Store
 * Manages AI tutor conversation state and history
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Message types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  metadata?: {
    phase?: number;
    topic?: string;
    correction?: string;
    arabicText?: string;
    transliteration?: string;
  };
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
  phase?: number;
}

interface ChatState {
  // Current session
  currentSessionId: string | null;
  sessions: ChatSession[];
  
  // UI state
  isLoading: boolean;
  error: string | null;
  
  // Actions
  createSession: (title?: string, phase?: number) => string;
  setCurrentSession: (sessionId: string) => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  updateLastAssistantMessage: (content: string) => void;
  deleteSession: (sessionId: string) => void;
  clearAllSessions: () => void;
  getCurrentSession: () => ChatSession | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      currentSessionId: null,
      sessions: [],
      isLoading: false,
      error: null,
      
      createSession: (title?: string, phase?: number) => {
        const id = generateId();
        const newSession: ChatSession = {
          id,
          title: title || 'New Conversation',
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
          phase,
        };
        
        set(state => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: id,
        }));
        
        return id;
      },
      
      setCurrentSession: (sessionId: string) => {
        set({ currentSessionId: sessionId });
      },
      
      addMessage: (message) => {
        const { currentSessionId } = get();
        if (!currentSessionId) return;
        
        const newMessage: ChatMessage = {
          ...message,
          id: generateId(),
          timestamp: Date.now(),
        };
        
        set(state => ({
          sessions: state.sessions.map(session =>
            session.id === currentSessionId
              ? {
                  ...session,
                  messages: [...session.messages, newMessage],
                  updatedAt: Date.now(),
                  // Update title from first user message if default
                  title: session.messages.length === 0 && message.role === 'user'
                    ? message.content.slice(0, 50) + (message.content.length > 50 ? '...' : '')
                    : session.title,
                }
              : session
          ),
        }));
      },
      
      updateLastAssistantMessage: (content: string) => {
        const { currentSessionId } = get();
        if (!currentSessionId) return;
        
        set(state => ({
          sessions: state.sessions.map(session => {
            if (session.id !== currentSessionId) return session;
            
            const messages = [...session.messages];
            const lastIndex = messages.length - 1;
            
            if (lastIndex >= 0 && messages[lastIndex].role === 'assistant') {
              messages[lastIndex] = {
                ...messages[lastIndex],
                content,
              };
            }
            
            return {
              ...session,
              messages,
              updatedAt: Date.now(),
            };
          }),
        }));
      },
      
      deleteSession: (sessionId: string) => {
        set(state => {
          const newSessions = state.sessions.filter(s => s.id !== sessionId);
          return {
            sessions: newSessions,
            currentSessionId: state.currentSessionId === sessionId
              ? (newSessions[0]?.id || null)
              : state.currentSessionId,
          };
        });
      },
      
      clearAllSessions: () => {
        set({
          sessions: [],
          currentSessionId: null,
        });
      },
      
      getCurrentSession: () => {
        const { currentSessionId, sessions } = get();
        return sessions.find(s => s.id === currentSessionId) || null;
      },
      
      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
      
      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'arabic-master-chat',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sessions: state.sessions.slice(0, 50), // Keep last 50 sessions
        currentSessionId: state.currentSessionId,
      }),
    }
  )
);
