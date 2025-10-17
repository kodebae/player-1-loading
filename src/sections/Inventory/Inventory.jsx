import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './InventoryStyles.module.css';
import InventoryItem from '../../common/InventoryItem';

function Inventory() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const inventoryItems = [
    // Backend/Server Tools
    { name: 'Ruby on Rails', type: 'Backend', rarity: 'epic', icon: '💎' },
    { name: 'Java', type: 'Backend', rarity: 'rare', icon: '☕' },
    { name: 'SpringBoot', type: 'Backend', rarity: 'rare', icon: '🍃' },
    { name: 'Python', type: 'Backend', rarity: 'rare', icon: '🐍' },
    { name: 'Node', type: 'Backend', rarity: 'rare', icon: '🟢' },
    
    // Frontend Tools
    { name: 'JavaScript', type: 'Frontend', rarity: 'epic', icon: '⚡' },
    { name: 'React', type: 'Frontend', rarity: 'epic', icon: '⚛️' },
    { name: 'Redux', type: 'Frontend', rarity: 'rare', icon: '🔄' },
    { name: 'Vue.js', type: 'Frontend', rarity: 'rare', icon: '📺' },
    { name: 'Bootstrap', type: 'Frontend', rarity: 'common', icon: '🎨' },
    
    // Game Dev Tools (NEW!)
    { name: 'Roblox Studio', type: 'Game Dev', rarity: 'legendary', icon: '🎮' },
    { name: 'Luau', type: 'Game Dev', rarity: 'rare', icon: '🌙' },
    { name: 'Unreal Engine', type: 'Game Dev', rarity: 'legendary', icon: '🎯' },
    
    // Database & Tools
    { name: 'SQL', type: 'Database', rarity: 'rare', icon: '🗄️' },
    { name: 'Git', type: 'Tools', rarity: 'epic', icon: '🌿' },
    { name: 'Webpack/Vite', type: 'Tools', rarity: 'rare', icon: '📦' },
    { name: 'Cypress.io', type: 'Tools', rarity: 'common', icon: '🧪' },
    { name: 'Docker', type: 'Tools', rarity: 'rare', icon: '🐳' },
    
    // Design & Creative
    { name: 'UI/UX Design', type: 'Creative', rarity: 'rare', icon: '✨' },
    { name: 'Game Design', type: 'Creative', rarity: 'rare', icon: '📐' },
  ];

  const categories = ['All', 'Backend', 'Frontend', 'Game Dev', 'Database', 'Tools', 'Creative'];
  
  const filteredItems = selectedCategory === 'All' 
    ? inventoryItems 
    : inventoryItems.filter(item => item.type === selectedCategory);

  return (
    <section id="inventory" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="sectionTitle">🎒 INVENTORY</h1>
        <p className={styles.subtitle}>Tools & Technologies Collected</p>
      </motion.div>

      {/* Category Tabs */}
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Inventory Grid */}
      <div className={styles.inventoryGrid}>
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <InventoryItem {...item} />
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <motion.div
        className={styles.summary}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{filteredItems.length}</span>
          <span className={styles.summaryLabel}>Items Shown</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{inventoryItems.filter(i => i.rarity === 'legendary').length}</span>
          <span className={styles.summaryLabel}>Legendary</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{inventoryItems.filter(i => i.rarity === 'epic').length}</span>
          <span className={styles.summaryLabel}>Epic</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{inventoryItems.filter(i => i.rarity === 'rare').length}</span>
          <span className={styles.summaryLabel}>Rare</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Inventory;

