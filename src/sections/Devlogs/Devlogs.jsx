import { motion } from 'framer-motion';
import styles from './DevlogsStyles.module.css';
import { devJournalData } from '../../data/playerProgress.js';

function Devlogs() {
  const devlogs = devJournalData;

  const statusConfig = {
    published: { color: '#00ff88', label: 'ACTIVE' },
    inProgress: { color: '#ffd700', label: 'CURRENT' },
    locked: { color: '#666', label: 'LOCKED' },
  };

  return (
    <section id="devlogs" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="sectionTitle">📖 DEV JOURNAL</h1>
        <p className={styles.subtitle}>Chronicles of Player 1 – Solo Game Dev</p>
      </motion.div>

      <div className={styles.timeline}>
        {devlogs.map((log, index) => (
          <motion.div
            key={log.id}
            className={`${styles.logEntry} ${styles[log.status]}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Date Badge */}
            <div className={styles.dateBadge}>
              <span className={styles.dateText}>{log.level}</span>
            </div>

            {/* Log Card */}
            <motion.div
              className={styles.logCard}
              whileHover={log.status !== 'locked' ? { y: -5, scale: 1.02 } : {}}
            >
              {/* Status Badge */}
              <div 
                className={styles.statusBadge}
                style={{ background: statusConfig[log.status].color }}
              >
                {statusConfig[log.status].label}
              </div>

              {/* Category */}
              <span className={styles.category}>{log.category}</span>

              {/* Title */}
              <h3 className={styles.logTitle}>{log.title}</h3>

              {/* Content */}
              <p className={styles.logContent}>{log.content}</p>

              {/* XP Badge */}
              <div className={styles.xpBadge}>
                <span className={styles.xpIcon}>⚡</span>
                <span className={styles.xpValue}>+{log.xp} XP</span>
              </div>

              {/* Decorative Corner */}
              <div className={styles.cornerDecor}></div>
            </motion.div>

            {/* Timeline Connector */}
            {index < devlogs.length - 1 && (
              <div className={styles.connector}></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Devlogs;

