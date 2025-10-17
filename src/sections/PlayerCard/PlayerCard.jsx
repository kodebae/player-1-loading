import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './PlayerCardStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useTheme } from '../../common/ThemeContext.jsx';
import { calculatePlayerStats } from '../../data/playerProgress.js';

function PlayerCard() {
  const { theme, toggleTheme } = useTheme();
  const [xp, setXp] = useState(0);
  
  // Get dynamic player stats
  const playerStats = calculatePlayerStats();
  const { currentLevel, totalXP, maxXP, rank, color: rankColor, level: displayLevel } = playerStats;

  const themeIcon = theme === 'light' ? sun : moon;
  // Use light icons for both themes since dark mode has dark background
  const twitterIcon = twitterLight;
  const githubIcon = githubLight;
  const linkedinIcon = linkedinLight;

  // Animate XP bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(totalXP);
    }, 500);
    return () => clearTimeout(timer);
  }, [totalXP]);

  const stats = [
    { name: 'Coding', value: 85, icon: '💻', color: '#ff6b9d' },
    { name: 'Design', value: 55, icon: '🎨', color: '#00d9ff' },
    { name: 'Game Dev', value: 5, icon: '🎮', color: '#b388ff' },
    { name: 'Creativity', value: 90, icon: '⚡', color: '#ffd700' },
  ];

  return (
    <section id="player-card" className={styles.container}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Theme Toggle */}
        <motion.img
          className={styles.themeToggle}
          src={themeIcon}
          alt="theme toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        />

        <div className={styles.mainContent}>
          {/* Avatar Section */}
          <motion.div
            className={styles.avatarContainer}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <div className={styles.avatarBorder}>
              <img src={heroImg} alt="Player avatar" className={styles.avatar} />
              <div className={styles.levelBadge} style={{ background: rankColor }}>
                <span className={styles.levelText}>{rank}</span>
                <span className={styles.levelNumber}>{displayLevel}</span>
              </div>
            </div>
          </motion.div>

          {/* Player Info */}
          <div className={styles.playerInfo}>
            <motion.h1
              className={styles.playerName}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              PLAYER 1:<br />
              KARMEN DURBIN
            </motion.h1>

            <motion.div
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className={styles.classType}>Solo Game Dev</span>
              <span className={styles.statusDot}>●</span>
              <span className={styles.status} style={{ color: rankColor }}>
                {rank} Rank • Quest {currentLevel}/6
              </span>
            </motion.div>

            {/* XP Bar */}
            <motion.div
              className={styles.xpContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className={styles.xpHeader}>
                <span className={styles.xpLabel}>EXPERIENCE POINTS</span>
                <span className={styles.xpValue}>
                  {totalXP} / {maxXP} XP
                </span>
              </div>
              <div className={styles.xpBarOuter}>
                <motion.div
                  className={styles.xpBarInner}
                  initial={{ width: 0 }}
                  animate={{ width: `${(xp / maxXP) * 100}%` }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                >
                  <motion.div
                    className={styles.xpBarGlow}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className={styles.bio}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Embarking on the indie game dev journey — building worlds, crafting mechanics, and leveling up one project at a time. 🎮✨
            </motion.p>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <a href="https://x.com/karmen_durbin" target="_blank" rel="noreferrer">
                <motion.img
                  src={twitterIcon}
                  alt="Twitter"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a href="https://github.com/kodebae" target="_blank" rel="noreferrer">
                <motion.img
                  src={githubIcon}
                  alt="GitHub"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a href="https://www.linkedin.com/in/karmen-kristina-durbin/" target="_blank" rel="noreferrer">
                <motion.img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className={styles.statsTitle}>⚡ STATS</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className={styles.statItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <div className={styles.statHeader}>
                  <span className={styles.statIcon}>{stat.icon}</span>
                  <span className={styles.statName}>{stat.name}</span>
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
                <div className={styles.statBarOuter}>
                  <motion.div
                    className={styles.statBarInner}
                    style={{ background: stat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ delay: 1.9 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PlayerCard;

