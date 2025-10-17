import { motion } from 'framer-motion';
import styles from './AchievementBadge.module.css';

function AchievementBadge({ title, description, icon, unlocked, date }) {
  return (
    <motion.div
      className={`${styles.badge} ${!unlocked ? styles.locked : ''}`}
      whileHover={unlocked ? { scale: 1.05, y: -5 } : {}}
      whileTap={unlocked ? { scale: 0.95 } : {}}
    >
      {/* Icon Container */}
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{unlocked ? icon : '🔒'}</span>
        {unlocked && (
          <motion.div
            className={styles.glow}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </div>

      {/* Badge Info */}
      <div className={styles.badgeInfo}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        {unlocked && date && (
          <span className={styles.date}>Unlocked: {date}</span>
        )}
        {!unlocked && (
          <span className={styles.lockedText}>🔒 Locked</span>
        )}
      </div>

      {/* Shine effect for unlocked badges */}
      {unlocked && (
        <motion.div
          className={styles.shine}
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.div>
  );
}

export default AchievementBadge;

