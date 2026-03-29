import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ============================================
// LEAGUE SYSTEM
// ============================================

export type LeagueTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface League {
  tier: LeagueTier;
  name: string;
  minXP: number;
  maxXP: number;
  color: string;
  icon: string;
}

export const LEAGUES: Record<LeagueTier, League> = {
  bronze: {
    tier: 'bronze',
    name: 'Bronze',
    minXP: 0,
    maxXP: 999,
    color: '#CD7F32',
    icon: '🥉',
  },
  silver: {
    tier: 'silver',
    name: 'Silver',
    minXP: 1000,
    maxXP: 4999,
    color: '#C0C0C0',
    icon: '🥈',
  },
  gold: {
    tier: 'gold',
    name: 'Gold',
    minXP: 5000,
    maxXP: 14999,
    color: '#FFD700',
    icon: '🥇',
  },
  platinum: {
    tier: 'platinum',
    name: 'Platinum',
    minXP: 15000,
    maxXP: 49999,
    color: '#E5E4E2',
    icon: '💎',
  },
  diamond: {
    tier: 'diamond',
    name: 'Diamond',
    minXP: 50000,
    maxXP: Infinity,
    color: '#B9F2FF',
    icon: '💠',
  },
};

// ============================================
// LEADERBOARD TYPES
// ============================================

export interface LeaderboardUser {
  id: string;
  name: string;
  nameAr?: string;
  avatar?: string;
  xp: number;
  weeklyXP: number;
  league: LeagueTier;
  rank: number;
  previousRank?: number;
  streak?: number;
  level: number;
  country?: string;
  isFriend?: boolean;
}

export type LeaderboardTab = 'global' | 'weekly' | 'friends';

interface LeaderboardState {
  // User data
  currentUserId: string;
  userRank: number;
  userWeeklyRank: number;
  userLeague: LeagueTier;
  userWeeklyXP: number;
  weekStartDate: string;
  
  // Leaderboard data
  globalLeaderboard: LeaderboardUser[];
  weeklyLeaderboard: LeaderboardUser[];
  friendsLeaderboard: LeaderboardUser[];
  
  // UI State
  activeTab: LeaderboardTab;
  isLoading: boolean;
  
  // Actions
  setActiveTab: (tab: LeaderboardTab) => void;
  updateWeeklyXP: (xp: number) => void;
  addWeeklyXP: (amount: number) => void;
  calculateUserRank: () => void;
  checkWeeklyReset: () => void;
  getLeagueFromXP: (xp: number) => League;
  getProgressToNextLeague: (xp: number) => { current: number; required: number; percentage: number };
  refreshLeaderboards: () => void;
  addFriend: (userId: string) => void;
  removeFriend: (userId: string) => void;
}

// ============================================
// MOCK DATA GENERATION
// ============================================

const ARABIC_NAMES = [
  { name: 'Ahmad Mohammed', nameAr: 'أحمد محمد' },
  { name: 'Fatima Hassan', nameAr: 'فاطمة حسن' },
  { name: 'Omar Ali', nameAr: 'عمر علي' },
  { name: 'Layla Ahmed', nameAr: 'ليلى أحمد' },
  { name: 'Yusuf Ibrahim', nameAr: 'يوسف إبراهيم' },
  { name: 'Nour Eddine', nameAr: 'نور الدين' },
  { name: 'Sarah Johnson', nameAr: 'سارة جونسون' },
  { name: 'Mohammed Kareem', nameAr: 'محمد كريم' },
  { name: 'Aisha Benali', nameAr: 'عائشة بنعلي' },
  { name: 'Khalid Mansour', nameAr: 'خالد منصور' },
  { name: 'Mariam Saeed', nameAr: 'مريم سعيد' },
  { name: 'Hassan Osman', nameAr: 'حسن عثمان' },
  { name: 'Zahra Farid', nameAr: 'زهرة فريد' },
  { name: 'Ibrahim Saleh', nameAr: 'إبراهيم صالح' },
  { name: 'Hana Mahmoud', nameAr: 'هنا محمود' },
  { name: 'Ali Rashid', nameAr: 'علي راشد' },
  { name: 'Samira Khalil', nameAr: 'سميرة خليل' },
  { name: 'Tariq Nasser', nameAr: 'طارق ناصر' },
  { name: 'Amina Aziz', nameAr: 'أمينة عزيز' },
  { name: 'Jamal Hussein', nameAr: 'جمال حسين' },
  { name: 'Rania Fouad', nameAr: 'رانيا فؤاد' },
  { name: 'Mustafa Salem', nameAr: 'مصطفى سالم' },
  { name: 'Dina Hamdi', nameAr: 'دينا حمدي' },
  { name: 'Karim Abbas', nameAr: 'كريم عباس' },
  { name: 'Nadia Yousef', nameAr: 'نادية يوسف' },
  { name: 'Walid Farouk', nameAr: 'وليد فاروق' },
  { name: 'Lina Tamer', nameAr: 'لينا تامر' },
  { name: 'Samir Anwar', nameAr: 'سمير أنور' },
  { name: 'Maya Zaki', nameAr: 'مايا زكي' },
  { name: 'Adel Sherif', nameAr: 'عادل شريف' },
  { name: 'Rana Nabil', nameAr: 'رنا نبيل' },
  { name: 'Fadi Haddad', nameAr: 'فادي حداد' },
  { name: 'Noura Fathy', nameAr: 'نورة فتحي' },
  { name: 'Bassam Gamal', nameAr: 'بسام جمال' },
  { name: 'Salma Adel', nameAr: 'سلمى عادل' },
  { name: 'Hisham Reda', nameAr: 'هشام رضا' },
  { name: 'Yasmin Kamal', nameAr: 'ياسمين كمال' },
  { name: 'Nasser Lotfy', nameAr: 'ناصر لطفي' },
  { name: 'Reem Samir', nameAr: 'ريم سمير' },
  { name: 'Ziad Hamza', nameAr: 'زياد حمزة' },
  { name: 'Dalia Essam', nameAr: 'داليا عصام' },
  { name: 'Ashraf Magdy', nameAr: 'أشرف مجدي' },
  { name: 'Ghada Hosni', nameAr: 'غادة حسني' },
  { name: 'Ehab Mahmoud', nameAr: 'إيهاب محمود' },
  { name: 'Mona Shafik', nameAr: 'منى شفيق' },
  { name: 'Amr Tarek', nameAr: 'عمرو طارق' },
  { name: 'Heba Sayed', nameAr: 'هبة سيد' },
  { name: 'Sherif Amin', nameAr: 'شريف أمين' },
  { name: 'Ola Mostafa', nameAr: 'علا مصطفى' },
  { name: 'Rami Helal', nameAr: 'رامي هلال' },
];

const COUNTRIES = ['🇪🇬', '🇸🇦', '🇦🇪', '🇲🇦', '🇯🇴', '🇱🇧', '🇹🇳', '🇩🇿', '🇮🇶', '🇰🇼', '🇶🇦', '🇧🇭', '🇴🇲', '🇾🇪', '🇱🇾', '🇸🇩', '🇸🇾', '🇵🇸', '🇺🇸', '🇬🇧', '🇫🇷', '🇩🇪', '🇨🇦'];

function getLeagueTierFromXP(xp: number): LeagueTier {
  if (xp >= 50000) return 'diamond';
  if (xp >= 15000) return 'platinum';
  if (xp >= 5000) return 'gold';
  if (xp >= 1000) return 'silver';
  return 'bronze';
}

function generateMockUsers(): LeaderboardUser[] {
  const users: LeaderboardUser[] = [];
  
  // Generate XP values with a more realistic distribution
  const xpValues = ARABIC_NAMES.map((_, i) => {
    // Top users get higher XP
    if (i < 3) return Math.floor(Math.random() * 30000) + 50000; // Diamond
    if (i < 8) return Math.floor(Math.random() * 25000) + 15000; // Platinum
    if (i < 18) return Math.floor(Math.random() * 8000) + 5000; // Gold
    if (i < 35) return Math.floor(Math.random() * 3500) + 1000; // Silver
    return Math.floor(Math.random() * 900) + 100; // Bronze
  });
  
  // Sort XP values descending
  xpValues.sort((a, b) => b - a);
  
  for (let i = 0; i < ARABIC_NAMES.length; i++) {
    const xp = xpValues[i];
    const weeklyXP = Math.floor(xp * (Math.random() * 0.15 + 0.05)); // 5-20% of total XP
    
    users.push({
      id: `user-${i + 1}`,
      name: ARABIC_NAMES[i].name,
      nameAr: ARABIC_NAMES[i].nameAr,
      xp,
      weeklyXP,
      league: getLeagueTierFromXP(xp),
      rank: i + 1,
      previousRank: i + 1 + Math.floor(Math.random() * 5) - 2, // ±2 positions
      streak: Math.floor(Math.random() * 50),
      level: Math.floor(Math.sqrt(xp / 100)) + 1,
      country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)],
      isFriend: Math.random() > 0.8, // 20% chance of being a friend
    });
  }
  
  return users;
}

// Generate weekly leaderboard (sorted by weekly XP)
function generateWeeklyLeaderboard(users: LeaderboardUser[]): LeaderboardUser[] {
  return [...users]
    .sort((a, b) => b.weeklyXP - a.weeklyXP)
    .map((user, index) => ({
      ...user,
      rank: index + 1,
      previousRank: index + 1 + Math.floor(Math.random() * 3) - 1,
    }));
}

// Get friends leaderboard
function getFriendsLeaderboard(users: LeaderboardUser[]): LeaderboardUser[] {
  const friends = users.filter((u) => u.isFriend);
  return friends
    .sort((a, b) => b.xp - a.xp)
    .map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
}

// Get week start date (Monday)
function getWeekStartDate(): string {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const monday = new Date(now.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday.toISOString();
}

// ============================================
// LEADERBOARD STORE
// ============================================

const initialMockUsers = generateMockUsers();

export const useLeaderboardStore = create<LeaderboardState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentUserId: 'current-user',
      userRank: 25,
      userWeeklyRank: 18,
      userLeague: 'silver',
      userWeeklyXP: 450,
      weekStartDate: getWeekStartDate(),
      
      globalLeaderboard: initialMockUsers,
      weeklyLeaderboard: generateWeeklyLeaderboard(initialMockUsers),
      friendsLeaderboard: getFriendsLeaderboard(initialMockUsers),
      
      activeTab: 'global',
      isLoading: false,
      
      // Set active tab
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      // Update weekly XP
      updateWeeklyXP: (xp) => {
        const league = getLeagueTierFromXP(xp);
        set({ userWeeklyXP: xp, userLeague: league });
        get().calculateUserRank();
      },
      
      // Add to weekly XP
      addWeeklyXP: (amount) => {
        const { userWeeklyXP } = get();
        const newXP = userWeeklyXP + amount;
        get().updateWeeklyXP(newXP);
      },
      
      // Calculate user rank based on current XP
      calculateUserRank: () => {
        const { globalLeaderboard, weeklyLeaderboard, userWeeklyXP } = get();
        
        // Calculate global rank (would need total XP from gamification store in real app)
        const userRank = globalLeaderboard.filter((u) => u.xp > userWeeklyXP * 5).length + 1;
        
        // Calculate weekly rank
        const userWeeklyRank = weeklyLeaderboard.filter((u) => u.weeklyXP > userWeeklyXP).length + 1;
        
        set({ userRank, userWeeklyRank });
      },
      
      // Check if week has reset
      checkWeeklyReset: () => {
        const { weekStartDate } = get();
        const currentWeekStart = getWeekStartDate();
        
        if (weekStartDate !== currentWeekStart) {
          // New week - reset weekly XP
          set({
            userWeeklyXP: 0,
            weekStartDate: currentWeekStart,
            weeklyLeaderboard: generateWeeklyLeaderboard(generateMockUsers()),
          });
        }
      },
      
      // Get league from XP
      getLeagueFromXP: (xp) => {
        const tier = getLeagueTierFromXP(xp);
        return LEAGUES[tier];
      },
      
      // Get progress to next league
      getProgressToNextLeague: (xp) => {
        const currentLeague = LEAGUES[getLeagueTierFromXP(xp)];
        const leagues = Object.values(LEAGUES);
        const currentIndex = leagues.findIndex((l) => l.tier === currentLeague.tier);
        
        if (currentIndex === leagues.length - 1) {
          // Already at max league (Diamond)
          return {
            current: xp - currentLeague.minXP,
            required: 0,
            percentage: 100,
          };
        }
        
        const nextLeague = leagues[currentIndex + 1];
        const current = xp - currentLeague.minXP;
        const required = nextLeague.minXP - currentLeague.minXP;
        const percentage = Math.min(100, Math.round((current / required) * 100));
        
        return { current, required, percentage };
      },
      
      // Refresh leaderboards (simulate API call)
      refreshLeaderboards: () => {
        set({ isLoading: true });
        
        // Simulate API delay
        setTimeout(() => {
          const newUsers = generateMockUsers();
          set({
            globalLeaderboard: newUsers,
            weeklyLeaderboard: generateWeeklyLeaderboard(newUsers),
            friendsLeaderboard: getFriendsLeaderboard(newUsers),
            isLoading: false,
          });
        }, 500);
      },
      
      // Add friend
      addFriend: (userId) => {
        const { globalLeaderboard, friendsLeaderboard } = get();
        const user = globalLeaderboard.find((u) => u.id === userId);
        
        if (user && !user.isFriend) {
          const updatedUser = { ...user, isFriend: true };
          const updatedGlobal = globalLeaderboard.map((u) =>
            u.id === userId ? updatedUser : u
          );
          const updatedFriends = [...friendsLeaderboard, updatedUser]
            .sort((a, b) => b.xp - a.xp)
            .map((u, i) => ({ ...u, rank: i + 1 }));
          
          set({
            globalLeaderboard: updatedGlobal,
            friendsLeaderboard: updatedFriends,
          });
        }
      },
      
      // Remove friend
      removeFriend: (userId) => {
        const { globalLeaderboard, friendsLeaderboard } = get();
        
        const updatedGlobal = globalLeaderboard.map((u) =>
          u.id === userId ? { ...u, isFriend: false } : u
        );
        const updatedFriends = friendsLeaderboard
          .filter((u) => u.id !== userId)
          .map((u, i) => ({ ...u, rank: i + 1 }));
        
        set({
          globalLeaderboard: updatedGlobal,
          friendsLeaderboard: updatedFriends,
        });
      },
    }),
    {
      name: 'arabicmaster-leaderboard',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentUserId: state.currentUserId,
        userRank: state.userRank,
        userWeeklyRank: state.userWeeklyRank,
        userLeague: state.userLeague,
        userWeeklyXP: state.userWeeklyXP,
        weekStartDate: state.weekStartDate,
        friendsLeaderboard: state.friendsLeaderboard,
      }),
    }
  )
);
