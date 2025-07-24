import styles from './Benefits.module.css';

const BenefitsHeader = () => {
  return (
    <div className={styles['benefits-container1']}>
      <div className={styles['text-container']}>
        <h2 className={styles['benefits-header']}>Benefits</h2>
        <p className={styles['benefits-paragraph']}>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className={styles['benefits-button1']}>
        <button className={styles['view-all-button']}>View All</button>
      </div>
    </div>
  );
}

export default BenefitsHeader;