import React from 'react';
import styles from './footer.module.css';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div sclassName={styles['footer-content']}>
          {/* Company Info Section */}
          <div className={styles['footer-company']}>
            <div className={styles['footer-logo']}>
              <img src={logo} alt="Skillbridge Logo" />
            </div>
            <div className={styles['contact-info']}>
              <p><i className="far fa-envelope"></i> hello@skillbridge.com</p>
              <p><i className="fas fa-phone"></i> +91 91813 23 2309</p>
              <p><i className="fas fa-map-marker-alt"></i> Somewhere in the World</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles['footer-nav']}>
            <div className={styles['nav-column']}>
              <h3>Home</h3>
              <ul>
                <li><a>Benefits</a></li>
                <li><a>Our Courses</a></li>
                <li><a>Our Testimonials</a></li>
                <li><a>Our FAQ</a></li>
              </ul>
            </div>
            <div className={styles['nav-column']}>
              <h3>About Us</h3>
              <ul>
                <li><a>Company</a></li>
                <li><a>Achievements</a></li>
                <li><a>Our Goals</a></li>
              </ul>
            </div>
            <div className={styles['nav-column']}>
              <h3>Social Profiles</h3>
              <div className={styles['social-icons']}>
                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles['footer-bottom']}>
          <p>&copy; 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
