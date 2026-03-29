/**
 * Keyboard Shortcuts Hook
 * Global keyboard shortcuts for navigation and actions
 */

'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface ShortcutConfig {
  enabled?: boolean;
  shortcuts?: Record<string, () => void>;
}

// Default navigation shortcuts
const DEFAULT_SHORTCUTS: Record<string, string> = {
  'g h': '/dashboard', // Go to Home/Dashboard
  'g l': '/learn',     // Go to Learn
  'g p': '/practice',  // Go to Practice
  'g c': '/challenges', // Go to Challenges
  'g r': '/review',    // Go to Review
  'g t': '/chat',      // Go to Tutor
};

export function useKeyboardShortcuts(config: ShortcutConfig = {}) {
  const router = useRouter();
  const { enabled = true, shortcuts: customShortcuts = {} } = config;
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip if disabled or user is typing in an input
    if (!enabled) return;
    
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) {
      return;
    }
    
    // Build key combo string
    const parts: string[] = [];
    if (event.metaKey || event.ctrlKey) parts.push('cmd');
    if (event.altKey) parts.push('alt');
    if (event.shiftKey) parts.push('shift');
    parts.push(event.key.toLowerCase());
    const keyCombo = parts.join('+');
    
    // Check custom shortcuts first
    if (customShortcuts[keyCombo]) {
      event.preventDefault();
      customShortcuts[keyCombo]();
      return;
    }
    
    // Handle g-prefixed navigation (vim-style)
    if (event.key === 'g') {
      // Set up listener for next key
      const handleNextKey = (nextEvent: KeyboardEvent) => {
        const fullCombo = `g ${nextEvent.key.toLowerCase()}`;
        const route = DEFAULT_SHORTCUTS[fullCombo];
        
        if (route) {
          nextEvent.preventDefault();
          router.push(route);
        }
        
        document.removeEventListener('keydown', handleNextKey);
      };
      
      // Listen for next key within 1 second
      document.addEventListener('keydown', handleNextKey);
      setTimeout(() => {
        document.removeEventListener('keydown', handleNextKey);
      }, 1000);
      return;
    }
    
    // Quick actions
    switch (keyCombo) {
      case '?':
      case 'shift+/':
        // Show keyboard shortcuts help (could open a modal)
        break;
      case 'escape':
        // Could close modals, etc.
        break;
    }
  }, [enabled, router, customShortcuts]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Shortcut help data for display
export const SHORTCUT_CATEGORIES = [
  {
    name: 'Navigation',
    shortcuts: [
      { keys: 'g h', description: 'Go to Dashboard' },
      { keys: 'g l', description: 'Go to Learn' },
      { keys: 'g p', description: 'Go to Practice' },
      { keys: 'g c', description: 'Go to Challenges' },
      { keys: 'g r', description: 'Go to Review' },
      { keys: 'g t', description: 'Go to Tutor' },
    ],
  },
  {
    name: 'Actions',
    shortcuts: [
      { keys: '?', description: 'Show keyboard shortcuts' },
      { keys: 'Esc', description: 'Close dialogs' },
    ],
  },
];
