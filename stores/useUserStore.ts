import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User, AppSettings, Locale } from '@/types';

// ============================================
// USER STORE
// ============================================

interface UserState {
  // User
  user: User | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  
  // Settings
  settings: AppSettings;
  
  // UI State
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setGuest: (isGuest: boolean) => void;
  logout: () => void;
  
  // Settings actions
  setLocale: (locale: Locale) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleAudio: () => void;
  setAutoPlayAudio: (autoPlay: boolean) => void;
  toggleTransliteration: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  
  // UI actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const defaultSettings: AppSettings = {
  locale: 'fr',
  theme: 'light',
  audioEnabled: true,
  autoPlayAudio: false,
  showTransliteration: true,
  fontSize: 'medium',
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isGuest: true,
      settings: defaultSettings,
      sidebarOpen: true,
      mobileMenuOpen: false,

      // Set user (after authentication)
      setUser: (user: User | null) => {
        set({
          user,
          isAuthenticated: !!user,
          isGuest: !user,
        });
      },

      // Set guest mode
      setGuest: (isGuest: boolean) => {
        set({ isGuest });
      },

      // Logout
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isGuest: true,
        });
      },

      // Settings actions
      setLocale: (locale: Locale) => {
        set({
          settings: {
            ...get().settings,
            locale,
          },
        });
      },

      setTheme: (theme: 'light' | 'dark' | 'system') => {
        set({
          settings: {
            ...get().settings,
            theme,
          },
        });
      },

      toggleAudio: () => {
        set({
          settings: {
            ...get().settings,
            audioEnabled: !get().settings.audioEnabled,
          },
        });
      },

      setAutoPlayAudio: (autoPlay: boolean) => {
        set({
          settings: {
            ...get().settings,
            autoPlayAudio: autoPlay,
          },
        });
      },

      toggleTransliteration: () => {
        set({
          settings: {
            ...get().settings,
            showTransliteration: !get().settings.showTransliteration,
          },
        });
      },

      setFontSize: (size: 'small' | 'medium' | 'large') => {
        set({
          settings: {
            ...get().settings,
            fontSize: size,
          },
        });
      },

      // UI actions
      toggleSidebar: () => {
        set({ sidebarOpen: !get().sidebarOpen });
      },

      setSidebarOpen: (open: boolean) => {
        set({ sidebarOpen: open });
      },

      toggleMobileMenu: () => {
        set({ mobileMenuOpen: !get().mobileMenuOpen });
      },

      setMobileMenuOpen: (open: boolean) => {
        set({ mobileMenuOpen: open });
      },
    }),
    {
      name: 'arabicmaster-user',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isGuest: state.isGuest,
        settings: state.settings,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
);
