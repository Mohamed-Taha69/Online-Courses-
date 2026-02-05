import React from "react";


const CoursesSection = () => {
  return (
    <div className="w-full max-w-[1279px] mx-auto px-4 md:px-[15px]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-[60px] w-full gap-5 md:gap-0">
        <div className="flex flex-col max-w-[933px] gap-1.5">
          <h1 className="text-4xl font-bold text-black">Our Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
            id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
            habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="self-end bg-[#fcfcfd] border-none px-3 py-2 rounded-lg cursor-pointer">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        {courses.map((course, index) => (
          <div className="bg-white border border-[#f1f1f3] rounded-xl overflow-hidden p-[30px] md:p-[50px] flex flex-col gap-6" key={index}>
            <div className="w-full">
              <img src={course.image} alt={course.title} className="w-full h-[172px] md:h-[250px] rounded-[10px] object-cover" />
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-[#555] mb-[30px]">
              <div className="flex gap-2.5">
                <div className="border border-[#F1F1F3] rounded-lg h-[43px] w-[110px] flex items-center justify-center">{course.duration}</div>
                <div className="border border-[#F1F1F3] rounded-lg h-[43px] w-[110px] flex items-center justify-center">{course.level}</div>
              </div>
              <div className="ml-auto flex items-center">By {course.author}</div>
            </div>
            <div className="text-lg font-semibold">{course.title}</div>
            <div className="text-sm text-[#333]">{course.description}</div>
            <div className="p-3 bg-[#f8f8f8] text-center rounded-lg cursor-pointer font-semibold">Get it Now</div>
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
