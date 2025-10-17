import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formEndpoint) {
      // Fallback to mailto link
      const subject = encodeURIComponent(`Player 1 Portfolio - Message from ${formData.name}`);
      const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      // TODO: Replace with your actual email address
      window.location.href = `mailto:heykarmendurbin@gmail.com?subject=${subject}&body=${body}`;
      return;
    }
    // If endpoint exists, form will submit normally
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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