import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, images, duration, level, author, modules }) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="text-section">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="view-btn">View Course</button>
      </div>

      <div className="course-images">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Course image ${idx + 1}`} />
        ))}
      </div>

      <div className="course-meta">
        <div className="meta-top">
          <div className="duration">{duration}</div>
          <div className="level">{level}</div>
        </div>
        <div className="author">By {author}</div>
      </div>

      <div className="curriculum">
        <h3>Curriculum</h3>
        <div className="modules">
          {modules.map((mod, idx) => (
            <div key={idx} className="module">
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <p>{mod}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
