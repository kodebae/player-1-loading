import { motion } from 'framer-motion';
import styles from './QuestCard.module.css';

function QuestCard({ title, description, image, link, status, difficulty, xpReward, tags, progress }) {
  const statusConfig = {
    completed: { label: 'COMPLETED', color: '#00ff88', icon: '✓' },
    'in-progress': { label: 'IN PROGRESS', color: '#ffd700', icon: '◆' },
    locked: { label: 'LOCKED', color: '#666', icon: '🔒' },
  };

  const difficultyConfig = {
    Easy: { color: '#00ff88', stars: 1 },
    Medium: { color: '#ffd700', stars: 2 },
    Hard: { color: '#ff6b9d', stars: 3 },
  };

  const currentStatus = statusConfig[status] || statusConfig['in-progress'];
  const currentDifficulty = difficultyConfig[difficulty] || difficultyConfig.Medium;

  const cardContent = (
    <>
      {/* Quest Image */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.questImage} />
        {status === 'in-progress' && progress !== undefined && (
          <div className={styles.progressOverlay}>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <span className={styles.progressText}>{progress}%</span>
          </div>
        )}
        <div className={styles.statusBadge} style={{ background: currentStatus.color }}>
          <span>{currentStatus.icon}</span>
          <span>{currentStatus.label}</span>
        </div>
      </div>

      {/* Quest Info */}
      <div className={styles.questInfo}>
        <div className={styles.header}>
          <h3 className={styles.questTitle}>{title}</h3>
          <div className={styles.difficulty} style={{ color: currentDifficulty.color }}>
            {'★'.repeat(currentDifficulty.stars)}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* XP Reward */}
        <div className={styles.reward}>
          <span className={styles.xpIcon}>⚡</span>
          <span className={styles.xpValue}>+{xpReward} XP</span>
        </div>
      </div>
    </>
  );

  if (link && status === 'completed') {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.questCard}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={`${styles.questCard} ${link ? '' : styles.noLink}`}
      whileHover={{ y: -8 }}
    >
      {cardContent}
    </motion.div>
  );
}

export default QuestCard;

