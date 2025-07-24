import React from 'react';
import styles from './signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import personImg from '../images/person-1.png';
import googleImg from '../images/Google__G__logo.svg.webp';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles['signup-container']}>
        <div className={styles['left-side']}>
          <div className={styles.content}>
            <h2>Students Testimonials</h2>
            <p className={styles['testimonial-text']}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim elementum et. Ac cum eget malesuada in velit. Rhoncus feugiat vehicula in.
            </p>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging and effective.
              </p>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src={personImg} alt="Sarah L." />
                </div>
                <p className={styles.name}>Sarah L.</p>
              </div>
              <div className={styles.navigation}>
                <button className={styles['nav-btn']}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={styles['nav-btn']}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className={styles['read-more']}>
                <button className={styles['link-button']} onClick={() => console.log('Read more clicked')}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['right-side']}>
          <div className={styles['form-container']}>
            <h1>Sign Up</h1>
            <p>Create an account to unlock exclusive features.</p>
            <form>
              <div className={styles['input-group']}>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Enter your Name" />
              </div>
              <div className={styles['input-group']}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
              </div>
              <div className={styles['input-group']}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" />
                <FontAwesomeIcon icon={faEyeSlash} className={styles['password-toggle']} />
              </div>
              <div className={styles['checkbox-group']}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree with <button className={styles['link-button']} onClick={() => console.log('Terms clicked')}>Terms of Use</button> and <button className={styles['link-button']} onClick={() => console.log('Privacy clicked')}>Privacy Policy</button>
                </label>
              </div>
              <button type="submit" className={styles['signup-btn']}>Sign Up</button>
              <div className={styles.divider}>
                <span>OR</span>
              </div>
              <button type="button" className={styles['google-btn']}>
                <img src={googleImg} alt="Google" />
                Sign Up with Google
              </button>
              <div className={styles['login-link']}>
                Already have an account? <Link to="/login" className={styles['link-button']}>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
