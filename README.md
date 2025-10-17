# 🎮 Player 1 Portfolio - Gaming-Themed Developer Portfolio

A fully gamified portfolio showcasing my journey from full-stack developer to solo game dev. Built with React, Vite, and Framer Motion.

**Live Site:** Deployed on GitHub Pages  
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

Each quest completion earns you XP and ranks you up!

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

## 📝 How to Update Your Progress

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

Track milestones with 14 unlockable achievements:

**Unlocked:**
- 🌱 First Commit
- 👋 Hello World
- 🥞 Full Stack Dev
- 🎮 Player 1 (Rebranded as solo game dev)
- 🎯 Roblox Rookie
- ✨ Portfolio Master
- 🐛 Bug Slayer
- 🦉 Night Owl

**Locked:**
- 🌙 Luau Learner
- 🕹️ First Playable
- 🧪 Beta Tester
- 🚀 Game Published
- 👑 Solo Dev Legend
- ⭐ S Rank

---

## 🎒 Inventory System

Your tech stack displayed as collectible items with rarity tiers:

### Game Dev Tools
- 🎮 Roblox Studio (Legendary)
- 🌙 Luau (Rare)
- 🎯 Unity (Legendary)
- 🔷 C# (Rare)
- 🤖 Godot (Rare)

### Frontend Tools
- ⚡ JavaScript (Epic)
- ⚛️ React (Epic)
- 🔄 Redux (Rare)

### Backend Tools
- 💎 Ruby on Rails (Epic)
- ☕ Java (Rare)
- 🐍 Python (Rare)

*Plus Database, Tools, and Creative items*

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
**XP:** 10 / 1,010  
**Achievements:** 8 / 14 unlocked  
**Quest Progress:** 2 / 6

---

## 🚀 Roadmap

### Phase 1: Learning ✅
- [x] Portfolio built and deployed
- [x] Project structure gamified
- [ ] Complete Roblox basics tutorial

### Phase 2: Prototype (Quest 3)
- [ ] First playable build
- [ ] Core gameplay mechanics
- [ ] Basic player interactions

### Phase 3: Alpha (Quest 4)
- [ ] Multiple levels
- [ ] Inventory system
- [ ] Initial playtesting

### Phase 4: Beta (Quest 5)
- [ ] All major features
- [ ] NPCs and quests
- [ ] Polish and optimization

### Phase 5: Release (Quest 6)
- [ ] Complete game launch
- [ ] Deploy to Roblox
- [ ] Achieve S Rank! 🏆

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
