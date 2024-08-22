import { useEffect } from 'react';
import styles from './TimeLine.module.css';
import { milestones } from '../../common/TimeLine';

const CareerTimeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(`.${styles['timeline-item']}`);
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add(styles['visible']);
        } else {
          item.classList.remove(styles['visible']);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles['timeline-container']}>
      {milestones.map((milestone, index) => (
        <div key={index} className={styles['timeline-item']}>
          <div className={styles['timeline-date']}>{milestone.date}</div>
          <div className={styles['timeline-content']}>
            <h3 className={styles['dark-text']}>{milestone.title}</h3>
            <h4 className={styles['dark-text']}>{milestone.company} - {milestone.location}</h4>
            <p className={styles['dark-text']}>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;

