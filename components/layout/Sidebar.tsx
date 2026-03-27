"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  GraduationCap,
  Trophy,
  Target,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Layers,
  PenTool,
  Headphones,
  Mic,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useProgressStore } from "@/stores/useProgressStore";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/**
 * Sidebar navigation item type
 */
interface NavItem {
  href: string;
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

/**
 * Learning phases for navigation
 */
const phases = [
  { id: 1, key: "phase1", nameAr: "الأساسيات", color: "phase-1" },
  { id: 2, key: "phase2", nameAr: "المبتدئ", color: "phase-2" },
  { id: 3, key: "phase3", nameAr: "المتوسط", color: "phase-3" },
  { id: 4, key: "phase4", nameAr: "المتقدم", color: "phase-4" },
  { id: 5, key: "phase5", nameAr: "الخبير", color: "phase-5" },
];

/**
 * Main navigation items
 */
const mainNavItems: NavItem[] = [
  { href: "/dashboard", key: "dashboard", icon: Home },
  { href: "/learn", key: "learn", icon: BookOpen },
  { href: "/practice", key: "practice", icon: Target },
  { href: "/achievements", key: "achievements", icon: Trophy },
  { href: "/progress", key: "progress", icon: BarChart3 },
];

/**
 * Practice mode items
 */
const practiceItems: NavItem[] = [
  { href: "/practice/writing", key: "writing", icon: PenTool },
  { href: "/practice/listening", key: "listening", icon: Headphones },
  { href: "/practice/speaking", key: "speaking", icon: Mic },
  { href: "/practice/vocabulary", key: "vocabulary", icon: Layers },
];

/**
 * Secondary navigation items
 */
const secondaryNavItems: NavItem[] = [
  { href: "/settings", key: "settings", icon: Settings },
  { href: "/help", key: "help", icon: HelpCircle },
];

/**
 * Collapsible sidebar component for desktop navigation
 * Shows learning phases, practice modes, and user progress
 */
export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentPhase = 1 } = useProgressStore();
  const t = useTranslations('navigation');
  
  /**
   * Render a navigation item with optional tooltip when collapsed
   */
  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
    const Icon = item.icon;
    
    const linkContent = (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive
            ? "bg-sidebar-primary text-sidebar-primary-foreground"
            : "text-sidebar-foreground/70"
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1">{t(item.key)}</span>
            {item.badge && (
              <Badge variant="secondary" className="h-5 min-w-[20px] px-1.5 text-xs">
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Link>
    );
    
    if (isCollapsed) {
      return (
        <Tooltip key={item.href} delayDuration={0}>
          <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-2">
            {t(item.key)}
            {item.badge && (
              <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                {item.badge}
              </Badge>
            )}
          </TooltipContent>
        </Tooltip>
      );
    }
    
    return <div key={item.href}>{linkContent}</div>;
  };
  
  return (
    <aside
      className={cn(
        "hidden shrink-0 border-r border-sidebar-border bg-sidebar transition-all duration-300 lg:block lg:flex lg:flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-1 flex-col min-h-0">
        {/* Collapse toggle */}
        <div className="flex items-center justify-end border-b border-sidebar-border p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <ScrollArea className="flex-1 px-3 py-4">
          {/* Main Navigation */}
          <div className="space-y-1">
            {mainNavItems.map(renderNavItem)}
          </div>
          
          {/* Learning Phases */}
          {!isCollapsed && (
            <div className="mt-6">
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                {t('learningPhases')}
              </h3>
              <div className="space-y-1">
                {phases.map((phase) => {
                  const isActive = pathname === `/learn/phase/${phase.id}`;
                  const isCurrent = currentPhase === phase.id;
                  const isLocked = phase.id > currentPhase + 1;
                  
                  return (
                    <Link
                      key={phase.id}
                      href={isLocked ? "#" : `/learn/phase/${phase.id}`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                        isLocked
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-sidebar-accent",
                        isActive && "bg-sidebar-accent"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                          phase.color
                        )}
                      >
                        {phase.id}
                      </span>
                      <span className="flex-1 text-sidebar-foreground/80">
                        {t(phase.key)}
                      </span>
                      {isCurrent && (
                        <Badge className="h-5 bg-gold text-[10px] text-background">
                          {t('current')}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Practice Modes */}
          {!isCollapsed && (
            <div className="mt-6">
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                {t('practiceSection')}
              </h3>
              <div className="space-y-1">
                {practiceItems.map(renderNavItem)}
              </div>
            </div>
          )}
          
          {/* Collapsed phase indicators */}
          {isCollapsed && (
            <div className="mt-6 space-y-2">
              {phases.map((phase) => {
                const isLocked = phase.id > currentPhase + 1;
                
                return (
                  <Tooltip key={phase.id} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={isLocked ? "#" : `/learn/phase/${phase.id}`}
                        className={cn(
                          "flex items-center justify-center",
                          isLocked && "cursor-not-allowed opacity-50"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                            phase.color
                          )}
                        >
                          {phase.id}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <span className="font-arabic text-xs">{phase.nameAr}</span>
                      <span className="ml-1">{t(phase.key)}</span>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          )}
        </ScrollArea>
        
        {/* Secondary Navigation */}
        <div className="border-t border-sidebar-border p-3">
          <div className="space-y-1">{secondaryNavItems.map(renderNavItem)}</div>
        </div>
      </div>
    </aside>
  );
}
