import { motion } from 'framer-motion';
import styles from './FooterStyles.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.container}>
      <motion.div
        className={styles.hudContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* HUD Border */}
        <div className={styles.hudBorder}>
          {/* Game Credits Style */}
          <div className={styles.credits}>
            <motion.div
              className={styles.creditLine}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className={styles.label}>GAME DESIGN & DEVELOPMENT</span>
              <span className={styles.dots}></span>
              <span className={styles.value}>KARMEN DURBIN</span>
            </motion.div>

            <motion.div
              className={styles.creditLine}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className={styles.label}>ENGINE</span>
              <span className={styles.dots}></span>
              <span className={styles.value}>REACT + VITE</span>
            </motion.div>

            <motion.div
              className={styles.creditLine}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className={styles.label}>SPECIAL EFFECTS</span>
              <span className={styles.dots}></span>
              <span className={styles.value}>FRAMER MOTION + PARTICLES</span>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className={styles.copyrightText}>
              © {currentYear} KARMEN DURBIN • PLAYER 1 • LEVEL 1
            </p>
            <p className={styles.tagline}>
              PRESS START TO CONTINUE THE JOURNEY
            </p>
          </motion.div>

          {/* Corner Decorations */}
          <div className={styles.cornerTopLeft}></div>
          <div className={styles.cornerTopRight}></div>
          <div className={styles.cornerBottomLeft}></div>
          <div className={styles.cornerBottomRight}></div>
        </div>

        {/* Animated Scan Line */}
        <motion.div
          className={styles.scanLine}
          animate={{
            y: [0, 200, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </footer>
  );
}

export default Footer