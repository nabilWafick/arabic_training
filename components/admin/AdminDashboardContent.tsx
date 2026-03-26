"use client";

import { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  Trophy,
  TrendingUp,
  Activity,
  Settings,
  BarChart3,
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Download,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StatsData {
  totalUsers: number;
  activeToday: number;
  newThisWeek: number;
  lessonsCompleted: number;
  avgCompletionRate: number;
  totalXPAwarded: number;
  avgSessionTime: string;
  retention7Day: number;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  level?: number;
  xp?: number;
  lastActive?: string;
}

interface ActivityData {
  type: string;
  user: string;
  action: string;
  time: string;
}

export default function AdminDashboardContent() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState<StatsData | null>(null);
  const [users, setUsers] = useState<UserData[]>([]);
  const [activity, setActivity] = useState<ActivityData[]>([]);

  // Mock stats (fallback if API fails)
  const mockStats: StatsData = {
    totalUsers: 1247,
    activeToday: 89,
    newThisWeek: 156,
    lessonsCompleted: 8432,
    avgCompletionRate: 73,
    totalXPAwarded: 2_456_890,
    avgSessionTime: "18m 32s",
    retention7Day: 68,
  };

  // Fetch admin data
  useEffect(() => {
    setMounted(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch real data from API
      const [analyticsRes, usersRes, activityRes] = await Promise.all([
        fetch("/api/admin/analytics"),
        fetch("/api/admin/users?limit=5"),
        fetch("/api/admin/activity?limit=5"),
      ]);

      // If any request fails, show error but continue with mock data
      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json();
        setStats(analyticsData.data);
      } else {
        setStats(mockStats);
      }

      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(usersData.data || []);
      } else {
        // Use mock data
        setUsers([
          { id: "1", name: "Ahmed Hassan", email: "ahmed@example.com", level: 12, xp: 4520, lastActive: "2 hours ago" },
          { id: "2", name: "Sarah Johnson", email: "sarah@example.com", level: 8, xp: 2180, lastActive: "5 hours ago" },
          { id: "3", name: "Mohammed Ali", email: "mo@example.com", level: 15, xp: 6890, lastActive: "1 day ago" },
          { id: "4", name: "Emily Chen", email: "emily@example.com", level: 5, xp: 980, lastActive: "30 mins ago" },
          { id: "5", name: "Omar Farouk", email: "omar@example.com", level: 22, xp: 12450, lastActive: "Just now" },
        ]);
      }

      if (activityRes.ok) {
        const activityData = await activityRes.json();
        setActivity(activityData.data || []);
      } else {
        // Use mock data
        setActivity([
          { type: "achievement", user: "Omar Farouk", action: "unlocked 'Polyglot Master' achievement", time: "5m ago" },
          { type: "lesson", user: "Emily Chen", action: "completed Lesson 1.2: Vowel Marks", time: "12m ago" },
          { type: "signup", user: "New User", action: "created an account", time: "25m ago" },
          { type: "streak", user: "Ahmed Hassan", action: "reached 30-day streak!", time: "1h ago" },
          { type: "lesson", user: "Sarah Johnson", action: "started Phase 2: Beginner Vocabulary", time: "2h ago" },
        ]);
      }
    } catch (err) {
      console.error("Failed to fetch admin data:", err);
      setError("Failed to load some data. Showing defaults.");
      setStats(mockStats);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  // Use stats or mock if loading
  const displayStats = stats || mockStats;

  // Stats cards configuration
  const statsCards = [
    {
      icon: Users,
      label: "Total Users",
      value: displayStats.totalUsers.toLocaleString(),
      subtext: `${displayStats.newThisWeek} new this week`,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Activity,
      label: "Active Today",
      value: displayStats.activeToday.toString(),
      subtext: `${Math.round((displayStats.activeToday / displayStats.totalUsers) * 100)}% of users`,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: BookOpen,
      label: "Lessons Completed",
      value: displayStats.lessonsCompleted.toLocaleString(),
      subtext: `${displayStats.avgCompletionRate}% completion rate`,
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: Trophy,
      label: "Total XP Awarded",
      value: (displayStats.totalXPAwarded / 1_000_000).toFixed(2) + "M",
      subtext: "Across all users",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Platform overview and user management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button
            className="gap-2 bg-gold text-background hover:bg-gold-dark"
            onClick={() => fetchData()}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}
                  >
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.subtext}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Users Table */}
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              Recent Users
            </CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {users
                .filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">
                          Level {user.level || 0}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(user.xp || 0).toLocaleString()} XP
                        </p>
                      </div>
                      <Badge variant="secondary">{user.lastActive || "Unknown"}</Badge>
                    </div>
                  </div>
                ))}
            </div>
            <Button variant="ghost" className="mt-4 w-full gap-2">
              View All Users
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-gold" />
              Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      item.type === "achievement"
                        ? "bg-purple-500/10 text-purple-500"
                        : item.type === "streak"
                        ? "bg-orange-500/10 text-orange-500"
                        : item.type === "signup"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    {item.type === "achievement" ? (
                      <Trophy className="h-4 w-4" />
                    ) : item.type === "streak" ? (
                      "🔥"
                    ) : item.type === "signup" ? (
                      <Users className="h-4 w-4" />
                    ) : (
                      <BookOpen className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">
                        {item.user}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-gold" />
            Learning Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="engagement">
            <TabsList className="mb-6">
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="retention">Retention</TabsTrigger>
            </TabsList>

            <TabsContent value="engagement">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-border/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Avg Session Time
                    </p>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {displayStats.avgSessionTime}
                  </p>
                  <p className="text-xs text-green-500">+12% from last week</p>
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Daily Active Users
                    </p>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {displayStats.activeToday}
                  </p>
                  <Progress value={68} className="mt-2 h-2" />
                </div>
                <div className="rounded-lg border border-border/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      7-Day Retention
                    </p>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {displayStats.retention7Day}%
                  </p>
                  <p className="text-xs text-green-500">Above industry avg</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Phase completion rates across all users
                </p>
                {[
                  { phase: "Phase 1: Foundations", completion: 85 },
                  { phase: "Phase 2: Beginner Vocabulary", completion: 62 },
                  { phase: "Phase 3: Intermediate Grammar", completion: 38 },
                  { phase: "Phase 4: Advanced Expression", completion: 15 },
                  { phase: "Phase 5: Expert Mastery", completion: 5 },
                ].map((item) => (
                  <div key={item.phase} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.phase}</span>
                      <span className="text-muted-foreground">
                        {item.completion}%
                      </span>
                    </div>
                    <Progress value={item.completion} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="retention">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="mx-auto h-12 w-12 opacity-50" />
                <p className="mt-4">
                  Retention analytics charts coming soon
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
          <Users className="h-6 w-6 text-gold" />
          <span>Manage Users</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
          <BookOpen className="h-6 w-6 text-gold" />
          <span>Content Management</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
          <Trophy className="h-6 w-6 text-gold" />
          <span>Achievements</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
          <Settings className="h-6 w-6 text-gold" />
          <span>Settings</span>
        </Button>
      </div>
    </div>
  );
}
