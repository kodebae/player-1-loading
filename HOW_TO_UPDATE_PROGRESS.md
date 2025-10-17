# 📝 How to Update Your Player Progress

Your gaming portfolio is now **fully dynamic**! Update your level, rank, XP, and achievements by editing ONE simple file.

## 🎯 Quick Update Guide

**File to Edit:** `src/data/playerProgress.js`

This single file controls:
- 🎮 Your Player Card (Level, Rank, XP)
- 📖 Dev Journal entries
- 🏆 Achievements list

---

## 📊 Understanding the Ranking System

Your rank automatically calculates based on:
- **Quest Progress** (50% weight): Which level you're on in the Dev Journal
- **Achievements** (50% weight): How many achievements you've unlocked

### Rank Progression:
- **E Rank** (Level 1) - Gray - Just starting out
- **D Rank** (Level 2) - Light Purple - Making progress
- **C Rank** (Level 4) - Purple - Mid-journey
- **B Rank** (Level 6) - Cyan - Advanced
- **A Rank** (Level 8) - Pink - Almost there!
- **S Rank** (Level 10) - Gold - LEGENDARY STATUS! 🏆

---

## 📖 How to Update Dev Journal

In `src/data/playerProgress.js`, find the `devJournalData` array:

```javascript
{
  id: 2,
  level: 'Level 2 - First Steps',
  title: '🎮 Roblox Studio & Luau Basics',
  category: 'GAME DEV',
  content: 'Your description here...',
  xp: 50,
  status: 'inProgress',  // ← Change this!
}
```

### Status Options:
- `'published'` - Quest completed ✅
- `'inProgress'` - Currently working on 🔄
- `'locked'` - Not started yet 🔒

### To Progress to Next Quest:
1. Change your current quest's status from `'inProgress'` to `'published'`
2. Change the next quest's status from `'locked'` to `'inProgress'`
3. Save the file!

**Example:**
```javascript
// Completed Roblox Basics
{ id: 2, status: 'published', ... },

// Now working on Playable Demo
{ id: 3, status: 'inProgress', ... },
```

---

## 🏆 How to Update Achievements

In the same file, find `achievementsData`:

```javascript
{ 
  id: 9, 
  title: 'Luau Learner', 
  description: 'Master Luau scripting basics',
  icon: '🌙',
  unlocked: false,  // ← Change to true when earned!
}
```

### To Unlock an Achievement:
Change `unlocked: false` to `unlocked: true` and add a date:

```javascript
{ 
  id: 9, 
  title: 'Luau Learner',
  description: 'Master Luau scripting basics',
  icon: '🌙',
  unlocked: true,
  date: '2025'  // Add this
}
```

---

## 🎮 What Updates Automatically

When you edit `playerProgress.js`, these update automatically:

### Player Card Shows:
- ✅ Your current rank (E → D → C → B → A → S)
- ✅ Level number (1-10)
- ✅ Total XP earned
- ✅ Quest progress (Quest X/5)
- ✅ Rank color on badge

### Dev Journal Shows:
- ✅ Current quest glowing with golden animation
- ✅ Completed quests marked as ACTIVE
- ✅ Locked quests grayed out
- ✅ XP badges on each entry

### Achievements Shows:
- ✅ Unlocked count (e.g., "8 / 14")
- ✅ Progress bar
- ✅ Unlocked badges with glow
- ✅ Locked badges dimmed

---

## 🚀 Quick Tips

1. **Save Often**: Every time you edit `playerProgress.js`, save and check your browser!
2. **Hot Reload**: Vite will auto-refresh your changes
3. **One File**: You only need to edit `src/data/playerProgress.js` - nothing else!
4. **Rank Up**: Complete quests and unlock achievements to increase your rank
5. **S Rank Goal**: Unlock all achievements and complete all quests to hit S Rank! ⭐

---

## 📋 Current Progress Checklist

To reach **S Rank**, you need to:
- [ ] Complete all 5 Dev Journal quests
- [ ] Unlock all 14 achievements
- [ ] Earn maximum XP

### Your Current Status:
- ✅ E Rank → D Rank
- 🔄 Currently on: Quest 2/5
- 🏆 Achievements: 8/14 unlocked
- ⚡ XP: 10/1000

---

## 🎯 Example: Completing Level 2

**Before (Learning Roblox):**
```javascript
{ id: 2, status: 'inProgress', xp: 50 }
```

**After (Finished Learning):**
```javascript
// Mark Level 2 complete
{ id: 2, status: 'published', xp: 50 },

// Start Level 3
{ id: 3, status: 'inProgress', xp: 100 },

// Unlock achievement
{ id: 9, title: 'Luau Learner', unlocked: true, date: '2025' }
```

**Result:**
- 🎉 XP increases from 10 → 60
- 📈 Rank increases (probably still D, working toward C)
- ✨ Achievement badge unlocks with glow effect
- 🎮 Player card updates automatically!

---

Good luck on your journey, Player 1! 🎮✨

Keep updating your progress and watch yourself rank up from E all the way to S! 🏆

