import styles from './Benefits.module.css';
import num1Icon from '../images/Number.svg';
import num2Icon from '../images/Number (1).svg';
import num3Icon from '../images/Number (2).svg';
import num4Icon from '../images/Number (3).svg';
import num5Icon from '../images/Number (4).svg';
import num6Icon from '../images/Number (5).svg';
import vectorIcon from '../images/Vector (Stroke).svg';
const BenefitsCards = () => {
  return (
    <div className={styles['benefits-container2']}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.number}><img src={num1Icon} alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Flexible Learning Schedule</h3>
            <p className={styles['card-p']}>
              Fit your coursework around your existing commitments and obligations.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                  <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.number}><img src={num2Icon} alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Expert Instruction</h3>
            <p className={styles['card-p']}>
              Learn from industry experts who have hands-on experience in design and development.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                  <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.number}><img src={num3Icon}alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Diverse Course Offerings</h3>
            <p className={styles['card-p']}>
              Explore a wide range of design and development courses covering various topics.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                  <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.number}><img src={num4Icon} alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Updated Curriculum</h3>
            <p className={styles['card-p']}>
              Access courses with up-to-date content reflecting the latest trends and industry practices.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                   <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.number}><img src={num5Icon}alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Practical Projects and Assignments</h3>
            <p className={styles['card-p']}>
              Develop a portfolio showcasing your skills and abilities to potential employers.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                  <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.number}><img src={num6Icon} alt="" /></p>
          <div className={styles['card-container']}>
            <h3 className={styles['card-header']}>Interactive Learning Environment</h3>
            <p className={styles['card-p']}>
              Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.
            </p>
          </div>
          <div className={styles['benefits-button2']}>
            <button className={styles.vector}>
                  <img className={styles['v-icon']} src={vectorIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCards;
