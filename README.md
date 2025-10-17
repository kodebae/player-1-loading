# 🎮 Player 1 Portfolio - Gaming Developer Portfolio

A fully gamified portfolio showcasing my journey from full-stack developer to solo game dev. Built with React, Vite, and Framer Motion.

**Live Site:** Deployed on GitHub Pages Link Here [] 
**Developer:** Karmen Durbin (Player 1)

---

## 🎯 Overview

This isn't just a portfolio—it's a **player profile**. Track my progression through the indie game dev journey with:
- 🎮 Dynamic ranking system (E → D → C → B → A → S)
- 📖 Quest-based dev journal
- 🏆 Unlockable achievements
- 🎒 Tech stack as collectible inventory items
- ✨ Particle effects and gaming animations
- 💬 HUD-style contact form

---

## 🚀 Quick Start

### Run Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:5173/kodebae-app/`

### Deploy to GitHub Pages
```bash
npm run build
npm run deploy
```

---

## 🎮 Dev Journal Structure (6 Levels)

Each quest completion earns XP and ranks you up!

| Quest | Level | Rank | Title | XP | Total XP |
|-------|-------|------|-------|-----|----------|
| 1 | Level 1 - Awakening | **E** 🔘 | 💡 The Spark | +10 | 10 |
| 2 | Level 2 - First Steps | **D** 🟣 | 🎮 Roblox Studio & Luau Basics | +50 | 60 |
| 3 | Level 3 - Prototype Demo | **C** 🟣 | 🕹️ First Playable Build | +100 | 160 |
| 4 | Level 4 - Alpha Release | **B** 🔵 | 🎯 Alpha Build | +150 | 310 |
| 5 | Level 5 - Beta Release | **A** 🌸 | 🧪 Beta Build | +200 | 510 |
| 6 | Level 6 - Final Boss | **S** 🏆 | 🚀 Full Game Release | +500 | 1,010 |

**Maximum XP:** 1,010 XP  
**Current Status:** E Rank, Quest 2/6, 10 XP

---

## 📊 Ranking System

Your rank is directly tied to your quest progress:

### Rank Progression
- **E Rank** (Level 1) - Gray - Just starting out
- **D Rank** (Level 2) - Light Purple - Learning the basics
- **C Rank** (Level 3) - Purple - First playable prototype
- **B Rank** (Level 4) - Cyan - Alpha release ready
- **A Rank** (Level 5) - Pink - Beta version complete
- **S Rank** (Level 6) - Gold - FULL GAME RELEASED! 🏆

### How It Works
- Complete a quest → Rank up automatically
- Your Player Card badge updates with rank color
- Level number changes (1-6)
- XP accumulates from completed quests

---

## 📝 How to Update Progress

All progress is managed through **ONE file:**  
`src/data/playerProgress.js`

### To Complete a Quest:
```javascript
// Mark current quest complete
{ id: 2, status: 'published' },  // Roblox Basics done!

// Start next quest
{ id: 3, status: 'inProgress' },  // Begin Prototype
```

### To Unlock an Achievement:
```javascript
{ 
  id: 9, 
  title: 'Luau Learner', 
  unlocked: true,  // Change from false to true
  date: '2025'     // Add completion date
}
```

**What Updates Automatically:**
- ✅ Player Card rank & level
- ✅ XP bar and total
- ✅ Dev Journal status badges
- ✅ Achievement progress tracker
- ✅ Badge colors

See `HOW_TO_UPDATE_PROGRESS.md` for detailed instructions.

---

## 🏆 Achievements System

Track milestones with 30 unlockable achievements:

**Current Progress: 8 / 30 unlocked (26.7%)**

### Unlocked (8):
1. 🌱 **First Commit** - Made your first Git commit
2. 👋 **Hello World** - Created your first program
3. 🥞 **Full Stack Dev** - Mastered frontend and backend
4. 🎮 **Player 1** - Rebranded as a solo game developer
5. 🎯 **Roblox Rookie** - Started learning Roblox Studio
6. ✨ **Portfolio Master** - Built a gaming-themed portfolio
7. 🐛 **Bug Slayer** - Fixed 100+ bugs in production
8. 🦉 **Night Owl** - Coded through the night

### Locked - Game Dev Journey (22):
9. 🌙 **Luau Learner** - Master Luau scripting basics
10. 🕹️ **First Playable** - Create your first playable game demo
11. 🧪 **Beta Tester** - Launch a beta version of your game
12. 🚀 **Game Published** - Release a game to the public
13. 👑 **Solo Dev Legend** - Complete a full game solo within 1 year
14. ⭐ **S Rank** - Reach S Rank status
15. 🎨 **Avatar Apprentice** - Create your first Avatar character
16. 🗺️ **Quest Designer** - Design your first quest or mission
17. 🎒 **Inventory Keeper** - Implement a working inventory system
18. ⬆️ **Level Up** - Complete your first in-game level
19. ✨ **Effects Wizard** - Add visual effects to your game
20. 🎵 **Sound Designer** - Add audio effects or background music
21. 🫂 **Multiplayer Initiate** - Implement basic multiplayer functionality
22. 👹 **First Boss Defeated** - Implement and beat your first boss encounter
23. 🏆 **Achievement Hunter** - Unlock 10 achievements in your own game
24. 🥷 **Debug Ninja** - Solve a game-breaking bug under pressure
25. 🖌️ **Pixel Animator** - Animate a sprite sheet successfully
26. ⏱️ **Game Jam Veteran** - Complete a game prototype in under 48 hours
27. 📜 **Lore Master** - Write the first full story or lore for your game
28. 🌾 **XP Farmer** - Playtest your game for 10+ hours
29. 🔨 **Bug Exterminator** - Fix 50 bugs in your game prototype
30. 🛡️ **Solo Dev Veteran** - Reach 6 months of consistent solo dev work

---

## 🎒 Inventory System

Your tech stack displayed as collectible items with rarity tiers:

### Game Dev Tools
- 🎮 **Roblox Studio** (Legendary)
- 🌙 **Luau** (Rare)
- 🎯 **Unreal Engine** (Legendary)

### Frontend Tools
- ⚡ **JavaScript** (Epic)
- ⚛️ **React** (Epic)
- 🔄 **Redux** (Rare)
- 📺 **Vue.js** (Rare)
- 🎨 **Bootstrap** (Common)

### Backend Tools
- 💎 **Ruby on Rails** (Epic)
- ☕ **Java** (Rare)
- 🍃 **SpringBoot** (Rare)
- 🐍 **Python** (Rare)
- 🟢 **Node** (Rare)

### Database & Tools
- 🗄️ **SQL** (Rare)
- 🌿 **Git** (Epic)
- 📦 **Webpack/Vite** (Rare)
- 🧪 **Cypress.io** (Common)
- 🐳 **Docker** (Rare)

### Creative
- ✨ **UI/UX Design** (Rare)
- 📐 **Game Design** (Rare)

**Features:**
- Category filtering (All, Backend, Frontend, Game Dev, etc.)
- Hover tooltips with item details
- Rarity-based colors and glows

---

## ✨ Key Features

### 🎨 Gaming Aesthetics
- Retro neon color palette (pinks, cyans, purples)
- Press Start 2P pixel font for headers
- Floating particle background with stars and shapes
- Glowing borders and shadows
- Smooth Framer Motion animations

### 🎮 Interactive Elements
- Category filtering in Inventory
- Hover effects on all cards
- Animated XP and stat bars
- Pulsing current quest indicator
- Click particles to spawn more

### 📱 Fully Responsive
- Mobile-friendly design
- Touch-optimized interactions
- Adaptive layouts for all screen sizes

### 🌓 Theme Switching
- Light and Dark modes
- Different particle colors per theme
- Adaptive glow effects

---

## 🛠️ Tech Stack

### Core
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Programming language

### Styling
- **CSS Modules** - Scoped component styling
- **Custom CSS Variables** - Dynamic theming
- **Google Fonts** - Press Start 2P & Space Grotesk

### Animation
- **Framer Motion** - Smooth animations and transitions
- **React TSParticles** - Interactive particle effects

### Deployment
- **GitHub Pages** - Hosting
- **gh-pages** - Deployment automation

---

## 📂 Project Structure

```
kodebae-app/
├── src/
│   ├── data/
│   │   └── playerProgress.js      # 🎯 UPDATE THIS FILE
│   ├── sections/
│   │   ├── PlayerCard/            # Hero section with rank & XP
│   │   ├── Quests/                # Game dev showcase (empty for now)
│   │   ├── Inventory/             # Tech stack display
│   │   ├── Achievements/          # Unlockable badges
│   │   ├── Devlogs/               # Quest journal
│   │   ├── Contact/               # HUD-style form
│   │   └── Footer/                # Gaming credits
│   ├── common/                    # Reusable components
│   └── assets/                    # Images and icons
├── HOW_TO_UPDATE_PROGRESS.md      # Detailed update guide
└── README.md                      # This file
```

---

## 🎯 Current Progress

**Status:** E Rank, Level 1  
**Active Quest:** Level 2 - Roblox Studio & Luau Basics  
**XP:** 10 / 1,000  
**Achievements:** 8 / 30 unlocked (26.7%)  
**Quest Progress:** 2 / 6

---

## 🚀 Roadmap

### Quest 1: Awakening (E Rank) ✅
- [x] Portfolio built and deployed
- [x] Project structure gamified
- [x] Rebranded as Player 1

### Quest 2: First Steps (D Rank) 🔄
- [x] Started learning Roblox Studio
- [ ] Complete Roblox basics tutorial
- [ ] Master Luau scripting fundamentals

### Quest 3: Prototype (C Rank)
- [ ] First playable build
- [ ] Core gameplay mechanics
- [ ] Test with friends

### Quest 4: Alpha Release (B Rank)
- [ ] Multiple levels and environments
- [ ] Refined player mechanics
- [ ] Basic inventory and leveling system

### Quest 5: Beta Release (A Rank)
- [ ] All major features implemented
- [ ] NPCs and interactive quests
- [ ] Polish and bug fixes

### Quest 6: Final Boss (S Rank) 🏆
- [ ] Complete game launch
- [ ] Deploy to Roblox platform
- [ ] Achieve LEGENDARY STATUS!

---

## 📸 Screenshots

*Coming soon: GIFs and screenshots of game dev progress!*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎮 About Player 1

Full-stack developer turned indie game dev on a mission to build and release my first game within 1 year. Follow my journey from E Rank to S Rank!

**Connect:**
- 🐦 Twitter: [@karmen_durbin](https://x.com/karmen_durbin)
- 💼 LinkedIn: [Karmen Durbin](https://www.linkedin.com/in/karmen-kristina-durbin/)
- 💻 GitHub: [@kodebae](https://github.com/kodebae)

---

**Press START to continue the journey!** 🎮✨

*Built with ❤️ by Player 1*
