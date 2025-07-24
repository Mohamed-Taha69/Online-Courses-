import React from 'react';
import CourseCard from './CourseCard';

// استيراد الصور
import img1 from '../images/dfd14f5a2a1b8774ac452db1e2b7551ba9f4f9f22.png';
import img2 from '../images/51e6eca86461c79646a72642654d9078a4229880.png';
import img3 from '../images/c8daf435572e236032a1e5584a90b7e83e2cf3c3.png';
import img4 from '../images/c7db2e46d8b8d36d090bb1100ba37e4bc1d03977.png';
import img5 from '../images/ca3d8515713fc05c4f8836ef5cd0962d7598c3e0.png';
import img6 from '../images/aee224473f652be83f056146e983d35f87192ccc.png';
import img7 from '../images/a7d3f078dc042dad81bad99e7f006e230e937e06.png';
import img8 from '../images/aebe41f1af591bfc5b04712bbf4df88d390c9688.png';
import img9 from '../images/2cf4b0962c9c7ebda76e43c381601caae757dcd4.png';
import img10 from '../images/f3bcbcf393c782a80c7dff34c22489a6b5d1d327.png';
import img11 from '../images/8ad100f23d6eac735dbd145abe37b1ba78be8685.png';
import img12 from '../images/6a02446972bc1a0fd30ebbfb230fa3093ba17421.png';
import img13 from '../images/659379db66c2dcd8d52c62c7f2f909141be3edc8.png';
import img14 from '../images/bc6563174bf9dbeda7ba855a7fc1cb326a5eef01.png';
import img15 from '../images/91670be6f4d88d8d0bca9827af448ccc554331f4.png';

// Map الصور
const imageMap = {
  "dfd14f5a2a1b8774ac452db1e2b7551ba9f4f9f22.png": img1,
  "51e6eca86461c79646a72642654d9078a4229880.png": img2,
  "c8daf435572e236032a1e5584a90b7e83e2cf3c3.png": img3,
  "c7db2e46d8b8d36d090bb1100ba37e4bc1d03977.png": img4,
  "ca3d8515713fc05c4f8836ef5cd0962d7598c3e0.png": img5,
  "aee224473f652be83f056146e983d35f87192ccc.png": img6,
  "a7d3f078dc042dad81bad99e7f006e230e937e06.png": img7,
  "aebe41f1af591bfc5b04712bbf4df88d390c9688.png": img8,
  "2cf4b0962c9c7ebda76e43c381601caae757dcd4.png": img9,
  "f3bcbcf393c782a80c7dff34c22489a6b5d1d327.png": img10,
  "8ad100f23d6eac735dbd145abe37b1ba78be8685.png": img11,
  "6a02446972bc1a0fd30ebbfb230fa3093ba17421.png": img12,
  "659379db66c2dcd8d52c62c7f2f909141be3edc8.png": img13,
  "bc6563174bf9dbeda7ba855a7fc1cb326a5eef01.png": img14,
  "91670be6f4d88d8d0bca9827af448ccc554331f4.png": img15
};

// بيانات الكورسات
const courses = [
  {
    title: "Web Design Fundamentals",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    images: [
      "dfd14f5a2a1b8774ac452db1e2b7551ba9f4f9f22.png",
      "51e6eca86461c79646a72642654d9078a4229880.png",
      "c8daf435572e236032a1e5584a90b7e83e2cf3c3.png"
    ],
    duration: "4 Weeks",
    level: "Beginner",
    author: "John Smith",
    modules: [
      "Introduction to HTML",
      "Styling with CSS",
      "Introduction to Responsive Design",
      "Design Principles for Web",
      "Building a Basic Website"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    images: [
      "c7db2e46d8b8d36d090bb1100ba37e4bc1d03977.png",
      "ca3d8515713fc05c4f8836ef5cd0962d7598c3e0.png",
      "aee224473f652be83f056146e983d35f87192ccc.png"
    ],
    duration: "6 Weeks",
    level: "Intermediate",
    author: "Emily Johnson",
    modules: [
      "Introduction to UI/UX Design",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Visual Design and Branding",
      "Usability Testing and Iteration"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    images: [
      "a7d3f078dc042dad81bad99e7f006e230e937e06.png",
      "aebe41f1af591bfc5b04712bbf4df88d390c9688.png",
      "2cf4b0962c9c7ebda76e43c381601caae757dcd4.png"
    ],
    duration: "8 Weeks",
    level: "Intermediate",
    author: "David Brown",
    modules: [
      "Introduction to Mobile App Development",
      "Fundamentals of Swift Programming (iOS)",
      "Fundamentals of Kotlin Programming (Android)",
      "Building User Interfaces",
      "App Deployment and Testing"
    ]
  },
  {
    title: "Graphic Design for Beginners",
    description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques.",
    images: [
      "f3bcbcf393c782a80c7dff34c22489a6b5d1d327.png",
      "8ad100f23d6eac735dbd145abe37b1ba78be8685.png",
      "6a02446972bc1a0fd30ebbfb230fa3093ba17421.png"
    ],
    duration: "10 Weeks",
    level: "Beginner",
    author: "Sarah Thompson",
    modules: [
      "Introduction to Graphic Design",
      "Typography and Color Theory",
      "Layout Design and Composition",
      "Image Editing and Manipulation",
      "Designing for Print and Digital Media"
    ]
  },
  {
    title: "Front-End Web Development",
    description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React.",
    images: [
      "659379db66c2dcd8d52c62c7f2f909141be3edc8.png",
      "bc6563174bf9dbeda7ba855a7fc1cb326a5eef01.png",
      "91670be6f4d88d8d0bca9827af448ccc554331f4.png"
    ],
    duration: "10 Weeks",
    level: "Intermediate",
    author: "Michael Adams",
    modules: [
      "HTML Fundamentals",
      "CSS Styling and Layouts",
      "JavaScript Basics",
      "Building Responsive Websites",
      "Introduction to Bootstrap and React"
    ]
  }
];

// حل المشكلة هنا – تمرير مصفوفة الصور بعد ربطها بـ imageMap
const CoursesList = () => {
  const coursesWithImages = courses.map(course => ({
    ...course,
    images: course.images.map(name => imageMap[name])
  }));

  return (
    <div className="courses-list">
      {coursesWithImages.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CoursesList;
