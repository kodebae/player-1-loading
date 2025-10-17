// Player Progress Data - Update this file to track your journey!

export const devJournalData = [
  {
    id: 1,
    level: 'Level 1 - Awakening',
    rank: 'E',
    title: '💡 The Spark',
    category: 'INSPIRATION',
    content: 'Today marks the beginning of my solo journey. I\'ve officially rebranded as Player 1. Mission: build my first game and release it on Roblox platform within 1 year.',
    xp: 10,
    status: 'published', // published = completed
  },
  {
    id: 2,
    level: 'Level 2 - First Steps',
    rank: 'D',
    title: '🎮 Roblox Studio & Luau Basics',
    category: 'GAME DEV',
    content: 'Learning the tools of the trade:\n• Roblox Studio environment setup\n• Luau scripting for player movement, triggers, and interactions\n• Creating a basic game loop\n\nGoal: Master the basics and unlock the playable demo quest.',
    xp: 40,
    status: 'inProgress', // inProgress = current quest
  },
  {
    id: 3,
    level: 'Level 3 - Prototype Demo',
    rank: 'C',
    title: '🕹️ First Playable Build',
    category: 'GAME DEV',
    content: 'First playable version coming together. Focus on:\n• Core gameplay mechanics\n• Player movement and basic interactions\n• Simple quest structure\n• Test with friends for feedback\n\nGoal: Create a working prototype within 12 weeks.',
    xp: 100,
    status: 'locked',
  },
  {
    id: 4,
    level: 'Level 4 - Alpha Release',
    rank: 'B',
    title: '🎯 Alpha Build',
    category: 'GAME DEV',
    content: 'Alpha version with expanded features:\n• Multiple levels and environments\n• Refined player mechanics\n• Basic inventory and leveling system\n• Initial playtesting phase\n\nGoal: Complete alpha build with core features by month 4.',
    xp: 150,
    status: 'locked',
  },
  {
    id: 5,
    level: 'Level 5 - Beta Release',
    rank: 'A',
    title: '🧪 Beta Build',
    category: 'GAME DEV',
    content: 'Beta version ready for wider testing:\n• All major features implemented\n• NPCs and interactive quests\n• Achievement system\n• Polish and bug fixes\n• Community feedback integration\n\nGoal: Beta playable by month 6.',
    xp: 200,
    status: 'locked',
  },
  {
    id: 6,
    level: 'Level 6 - Final Boss',
    rank: 'S',
    title: '🚀 Full Game Release',
    category: 'RELEASE',
    content: 'Finalize and launch the complete game:\n• Story complete and polished\n• All visuals and audio finalized\n• Full testing and optimization\n• Deploy to Roblox platform\n• Marketing and launch strategy\n\nGoal: Launch complete game within 1 year - LEGENDARY STATUS!',
    xp: 500,
    status: 'locked',
  },
];

export const achievementsData = [
  { id: 1, title: 'First Commit', description: 'Made your first Git commit', icon: '🌱', unlocked: true, date: '2017' },
  { id: 2, title: 'Hello World', description: 'Created your first program', icon: '👋', unlocked: true, date: '2017' },
  { id: 3, title: 'Full Stack Dev', description: 'Mastered frontend and backend', icon: '🥞', unlocked: true, date: '2021' },
  { id: 4, title: 'Player 1', description: 'Rebranded as a solo game developer', icon: '🎮', unlocked: true, date: '2025' },
  { id: 5, title: 'Roblox Rookie', description: 'Started learning Roblox Studio', icon: '🎯', unlocked: true, date: '2025' },
  { id: 6, title: 'Portfolio Master', description: 'Built a gaming-themed portfolio', icon: '✨', unlocked: true, date: '2025' },
  { id: 7, title: 'Bug Slayer', description: 'Fixed 100+ bugs in production', icon: '🐛', unlocked: true, date: '2024' },
  { id: 8, title: 'Night Owl', description: 'Coded through the night', icon: '🦉', unlocked: true, date: '2020' },
  { id: 9, title: 'Luau Learner', description: 'Master Luau scripting basics', icon: '🌙', unlocked: false },
  { id: 10, title: 'First Playable', description: 'Create your first playable game demo', icon: '🕹️', unlocked: false },
  { id: 11, title: 'Beta Tester', description: 'Launch a beta version of your game', icon: '🧪', unlocked: false },
  { id: 12, title: 'Game Published', description: 'Release a game to the public', icon: '🚀', unlocked: false },
  { id: 13, title: 'Solo Dev Legend', description: 'Complete a full game solo within 1 year', icon: '👑', unlocked: false },
  { id: 14, title: 'S Rank', description: 'Reach S Rank status', icon: '⭐', unlocked: false },
  { id: 15, title: 'Avatar Apprentice', description: 'Create your first Avatar character', icon: '🎨', unlocked: false },
  { id: 16, title: 'Quest Designer', description: 'Design your first quest or mission', icon: '🗺️', unlocked: false },
  { id: 17, title: 'Inventory Keeper', description: 'Implement a working inventory system', icon: '🎒', unlocked: false },
  { id: 18, title: 'Level Up', description: 'Complete your first in-game level', icon: '⬆️', unlocked: false },
  { id: 19, title: 'Effects Wizard', description: 'Add visual effects to your game', icon: '✨', unlocked: false },
  { id: 20, title: 'Sound Designer', description: 'Add audio effects or background music', icon: '🎵', unlocked: false },
  { id: 21, title: 'Multiplayer Initiate', description: 'Implement basic multiplayer functionality', icon: '🫂', unlocked: false },
  { id: 22, title: 'First Boss Defeated', description: 'Implement and beat your first boss encounter', icon: '👹', unlocked: false },
  { id: 23, title: 'Achievement Hunter', description: 'Unlock 10 achievements in your own game', icon: '🏆', unlocked: false },
  { id: 24, title: 'Debug Ninja', description: 'Solve a game-breaking bug under pressure', icon: '🥷', unlocked: false },
  { id: 25, title: 'Pixel Animator', description: 'Animate a sprite sheet successfully', icon: '🖌️', unlocked: false },
  { id: 26, title: 'Game Jam Veteran', description: 'Complete a game prototype in under 48 hours', icon: '⏱️', unlocked: false },
  { id: 27, title: 'Lore Master', description: 'Write the first full story or lore for your game', icon: '📜', unlocked: false },
  { id: 28, title: 'XP Farmer', description: 'Playtest your game for 10+ hours', icon: '🌾', unlocked: false },
  { id: 29, title: 'Bug Exterminator', description: 'Fix 50 bugs in your game prototype', icon: '🔨', unlocked: false },
  { id: 30, title: 'Solo Dev Veteran', description: 'Reach 6 months of consistent solo dev work', icon: '🛡️', unlocked: false },
];

// Calculate player stats based on progress
export const calculatePlayerStats = () => {
  // Calculate total XP from completed quests only
  const completedQuests = devJournalData.filter(q => q.status === 'published');
  const totalXP = completedQuests.reduce((sum, quest) => sum + quest.xp, 0);
  
  // Get current quest number (the one in progress)
  const currentQuestIndex = devJournalData.findIndex(q => q.status === 'inProgress');
  const currentLevel = currentQuestIndex >= 0 ? currentQuestIndex + 1 : (completedQuests.length === devJournalData.length ? devJournalData.length : completedQuests.length);
  
  // Count unlocked achievements
  const unlockedAchievements = achievementsData.filter(a => a.unlocked).length;
  const totalAchievements = achievementsData.length;
  
  // Calculate rank based on highest completed quest level
  // Each quest completion = rank up (E → D → C → B → A → S)
  const getRank = () => {
    const rankColors = {
      'E': { rank: 'E', color: '#9E9E9E', level: 1 },
      'D': { rank: 'D', color: '#A8B2D1', level: 2 },
      'C': { rank: 'C', color: '#B388FF', level: 3 },
      'B': { rank: 'B', color: '#00D9FF', level: 4 },
      'A': { rank: 'A', color: '#FF6B9D', level: 5 },
      'S': { rank: 'S', color: '#FFD700', level: 6 },
    };
    
    // Your rank is based on the highest completed quest
    if (completedQuests.length === 0) {
      return rankColors['E']; // No quests completed = E Rank
    }
    
    // Get the rank of the last completed quest
    const lastCompletedQuest = completedQuests[completedQuests.length - 1];
    return rankColors[lastCompletedQuest.rank] || rankColors['E'];
  };
  
  const rankInfo = getRank();
  
  return {
    currentLevel,
    totalXP,
    maxXP: 1000, // Can be dynamic based on rank
    unlockedAchievements,
    totalAchievements,
    ...rankInfo,
  };
};

