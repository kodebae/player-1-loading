import { motion } from 'framer-motion';
import styles from './QuestsStyles.module.css';

function Quests() {
  // Empty array for now - will be populated with GIFs/screenshots of game dev work
  const gameDevShowcase = [];

  return (
    <section id="quests" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="sectionTitle">🎮 GAME DEV SHOWCASE</h1>
        <p className={styles.subtitle}>Work in Progress - GIFs & Screenshots Coming Soon!</p>
      </motion.div>

      {gameDevShowcase.length > 0 ? (
        <div className={styles.showcaseGrid}>
          {gameDevShowcase.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.showcaseItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={item.image} alt={item.title} className={styles.showcaseImage} />
              <div className={styles.showcaseInfo}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className={styles.emptyState}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.emptyCard}>
            <span className={styles.emptyIcon}>🎮</span>
            <h3 className={styles.emptyTitle}>BUILDING SOMETHING EPIC...</h3>
            <p className={styles.emptyText}>
              Game dev progress will be showcased here soon.<br />
              Stay tuned for GIFs, screenshots, and playable demos!
            </p>
            <div className={styles.loadingBar}>
              <motion.div
                className={styles.loadingFill}
                animate={{
                  width: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Quests;

