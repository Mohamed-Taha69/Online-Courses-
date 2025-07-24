import React from "react";
import "./CoursesSection.css";

const CoursesSection = () => {
  return (
      <div className="custom-section-wrapper">
        <div className="custom-header">
          <div className="custom-text-section">
            <h1>Our Courses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
              id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
              habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="custom-view-btn">View All</button>
        </div>

        <div className="custom-cards">
          {courses.map((course, index) => (
            <div className="custom-card" key={index}>
              <div className="custom-course-images">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="custom-course-meta">
                <div className="custom-meta-top">
                  <div className="custom-duration">{course.duration}</div>
                  <div className="custom-level">{course.level}</div>
                </div>
                <div className="custom-author">By {course.author}</div>
              </div>
              <div className="custom-title">{course.title}</div>
              <div className="custom-desc">{course.description}</div>
              <div className="custom-button">Get it Now</div>
            </div>
          ))}
        </div>
      </div>
  );
};

const courses = [ 
  {
    image: "src/images/dfd14f5a2a1b8774ac452db1e2b7551ba9f4f9f22.png"
,
    duration: "4 Weeks",
    level: "Beginner",
    author: "John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
  },
  {
    image: "src/images/c7db2e46d8b8d36d090bb1100ba37e4bc1d03977.png",
    duration: "6 Weeks",
    level: "Intermediate",
    author: "Emily Johnson",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
  },
  {
    image: "src/images/a7d3f078dc042dad81bad99e7f006e230e937e06.png",
    duration: "8 Weeks",
    level: "Intermediate",
    author: "David Brown",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
  },
  {
    image: "src/images/f3bcbcf393c782a80c7dff34c22489a6b5d1d327.png",
    duration: "10 Weeks",
    level: "Beginner",
    author: "Sarah Thompson",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
  },
  {
    image: "src/images/659379db66c2dcd8d52c62c7f2f909141be3edc8.png",
    duration: "10 Weeks",
    level: "Intermediate",
    author: "Michael Adams",
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
  },
  {
    image: "src/images/5e3f628bb4ab95d141f4843685cb44020170f0b3.png",
    duration: "6 Weeks",
    level: "Advance",
    author: "Jennifer Wilson",
    title: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
  }
];

export default CoursesSection;
