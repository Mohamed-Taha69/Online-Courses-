import React from 'react';
import styles from './testimonials.module.css';
import person1 from '../images/person-1.png';
import person2 from '../images/person-2.png';
import person3 from '../images/person-3.png';
import person4 from '../images/person-4.png';

const testimonials = [
  {
    content: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    name: "Sarah L",
    image: person1
  },
  {
    content: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    name: "Jason M",
    image: person2
  },
  {
    content: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    name: "Emily R",
    image: person3
  },
  {
    content: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    name: "Michael K",
    image: person4
  }
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Our Testimonials</h1>
          <p className={styles['header-text']}>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className={styles['view-all']} onClick={() => console.log('View all testimonials')}>View All</button>
      </div>

      <div className={styles['testimonials-grid']}>
        {testimonials.map((testimonial, index) => (
          <div className={styles['testimonial-card']} key={index}>
            <p className={styles['testimonial-content']}>{testimonial.content}</p>
            <div className={styles['testimonial-footer']}>
              <div className={styles['user-info']}>
                <img src={testimonial.image} alt={testimonial.name} className={styles['user-avatar']} />
                <span className={styles['user-name']}>{testimonial.name}</span>
              </div>
              <button className={styles['read-more']} onClick={() => console.log(`Read full story of ${testimonial.name}`)}>Read Full Story</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
