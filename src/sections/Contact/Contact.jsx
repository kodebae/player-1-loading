import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (!formEndpoint) {
      e.preventDefault();
      alert('Contact form is not configured yet. Please reach out via social media!');
      return;
    }
    // If endpoint exists, form will submit normally
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="sectionTitle">💬 SEND MESSAGE</h1>
        <p className={styles.subtitle}>Ready to team up? Drop a message!</p>
      </motion.div>

      <motion.div
        className={styles.formWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <form action={formEndpoint} method="post" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              PLAYER NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              className={styles.textarea}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.btnIcon}>▶</span>
            SEND MESSAGE
          </motion.button>
        </form>

        {/* Corner Decorations */}
        <div className={styles.cornerTopLeft}></div>
        <div className={styles.cornerTopRight}></div>
        <div className={styles.cornerBottomLeft}></div>
        <div className={styles.cornerBottomRight}></div>
      </motion.div>
    </section>
  );
}

export default Contact;