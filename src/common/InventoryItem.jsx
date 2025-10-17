import { motion } from 'framer-motion';
import styles from './InventoryItem.module.css';

function InventoryItem({ name, type, rarity, icon }) {
  const rarityConfig = {
    common: { color: '#9e9e9e', glow: 'rgba(158, 158, 158, 0.5)', label: 'Common' },
    rare: { color: '#4a9eff', glow: 'rgba(74, 158, 255, 0.5)', label: 'Rare' },
    epic: { color: '#b388ff', glow: 'rgba(179, 136, 255, 0.5)', label: 'Epic' },
    legendary: { color: '#ffd700', glow: 'rgba(255, 215, 0, 0.6)', label: 'Legendary' },
  };

  const currentRarity = rarityConfig[rarity] || rarityConfig.common;

  return (
    <motion.div
      className={styles.itemCard}
      style={{ 
        '--rarity-color': currentRarity.color,
        '--rarity-glow': currentRarity.glow,
      }}
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Rarity indicator */}
      <div className={styles.rarityBorder} />
      
      {/* Icon */}
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>

      {/* Item Info */}
      <div className={styles.itemInfo}>
        <h4 className={styles.itemName}>{name}</h4>
        <div className={styles.itemMeta}>
          <span className={styles.itemType}>{type}</span>
          <span 
            className={styles.itemRarity}
            style={{ color: currentRarity.color }}
          >
            {currentRarity.label}
          </span>
        </div>
      </div>

      {/* Hover tooltip */}
      <div className={styles.tooltip}>
        <div className={styles.tooltipHeader}>
          <span className={styles.tooltipName}>{name}</span>
          <span 
            className={styles.tooltipRarity}
            style={{ color: currentRarity.color }}
          >
            {currentRarity.label}
          </span>
        </div>
        <div className={styles.tooltipType}>{type} Tool</div>
        <div className={styles.tooltipDesc}>
          Equipped and ready for battle!
        </div>
      </div>
    </motion.div>
  );
}

export default InventoryItem;

