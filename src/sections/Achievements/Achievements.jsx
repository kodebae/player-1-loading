import { motion } from 'framer-motion';
import styles from './AchievementsStyles.module.css';
import AchievementBadge from '../../common/AchievementBadge';
import { achievementsData } from '../../data/playerProgress.js';

function Achievements() {
  const achievements = achievementsData;
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <section id="achievements" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="sectionTitle">🏆 ACHIEVEMENTS</h1>
        <div className={styles.progressInfo}>
          <span className={styles.progressText}>
            Unlocked: {unlockedCount} / {totalCount}
          </span>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              whileInView={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      <div className={styles.achievementsGrid}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <AchievementBadge {...achievement} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;

