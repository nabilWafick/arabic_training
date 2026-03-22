"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun, Globe, User, LogOut, Settings, Flame, Star, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/stores/useUserStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";

/**
 * Navigation items configuration
 */
const navItems = [
  { href: "/dashboard", key: "dashboard" },
  { href: "/learn", key: "learn" },
  { href: "/practice", key: "practice" },
  { href: "/achievements", key: "achievements" },
];

/**
 * Language options for the language switcher
 */
const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

/**
 * Main navigation bar component with responsive design,
 * theme toggle, language switcher, and user menu
 */
export function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const { user, isAuthenticated, settings, setTheme, setLocale, logout } = useUserStore();
  const { stats, getLevelInfo } = useGamificationStore();
  
  // Extract stats with safe defaults
  const level = stats?.level ?? 1;
  const xp = stats?.xp ?? 0;
  const streak = stats?.streak ?? 0;
  
  // Calculate level info for XP progress
  const levelInfo = getLevelInfo();
  const xpProgress = levelInfo.requiredXP && levelInfo.requiredXP > 0 
    ? Math.min((levelInfo.currentXP / levelInfo.requiredXP) * 100, 100)
    : 0;
  
  const currentLanguage = languages.find((l) => l.code === settings.locale) || languages[0];
  
  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    const newTheme = settings.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark">
            <span className="font-arabic text-xl text-background">ع</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-xl font-bold text-foreground">
              Arabic<span className="text-gold">Master</span>
            </span>
            <span className="block text-xs text-muted-foreground">Pro</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-1 py-2 text-sm font-medium transition-colors hover:text-gold",
                pathname === item.href
                  ? "text-gold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold"
                  : "text-muted-foreground"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Gamification stats (visible when authenticated or has progress) */}
          {(isAuthenticated || level > 1 || xp > 0) && (
            <div className="hidden items-center gap-4 sm:flex">
              {/* Streak */}
              {streak > 0 && (
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4 text-orange-500 streak-flame" />
                  <span className="text-sm font-medium">{streak}</span>
                </div>
              )}
              
              {/* Level & XP */}
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  <Star className="mr-1 h-3 w-3" />
                  Lv.{level}
                </Badge>
                <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-gold progress-fill"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLocale(lang.code as "en" | "fr" | "ar")}
                  className={cn(
                    "cursor-pointer",
                    settings.locale === lang.code && "bg-gold/10"
                  )}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {settings.theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          {/* User Menu / Auth */}
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 gap-2 px-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                    <AvatarFallback className="bg-gold/20 text-gold text-xs">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.name || "User"}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    {t('profile')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    {t('settings')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => logout()}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">{t('login')}</Link>
              </Button>
              <Button size="sm" className="bg-gold hover:bg-gold-dark text-background" asChild>
                <Link href="/register">{t('register')}</Link>
              </Button>
            </div>
          )}
          
          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 pt-6">
                {/* Mobile nav items */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === item.href
                          ? "bg-gold/10 text-gold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile stats */}
                {(isAuthenticated || level > 1 || xp > 0) && (
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-gold" />
                        <span className="font-medium">Level {level}</span>
                      </div>
                      {streak > 0 && (
                        <div className="flex items-center gap-1">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">{streak} day streak</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{xp} XP</span>
                        <span>{xpForNextLevel} XP</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-gold progress-fill"
                          style={{ width: `${xpProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mobile auth buttons */}
                {!isAuthenticated && (
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button className="w-full bg-gold hover:bg-gold-dark text-background" asChild>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        Sign up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
