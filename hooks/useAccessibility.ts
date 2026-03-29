/**
 * Accessibility utilities and hooks
 * Ensures the platform is accessible to all users
 */

import { useEffect, useRef } from 'react';

/**
 * Hook to manage focus for screen readers and keyboard navigation
 */
export function useFocusManagement() {
  const focusRef = useRef<HTMLElement>(null);

  const setFocus = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  const trapFocus = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      // Handle focus trapping logic here if needed
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, []);

  return { focusRef, setFocus };
}

/**
 * Hook for announcing content changes to screen readers
 */
export function useScreenReader() {
  const announce = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announce };
}

/**
 * Hook for reduced motion preferences
 */
export function useReducedMotion() {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return prefersReducedMotion;
}