import React from 'react';


const CoursesTitle = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-start items-center border-b border-[#ccc] flex-wrap gap-5 mt-[109px] mx-[30px] lg:mx-[30px] mx-5 text-center lg:text-left">
      <div className="max-w-full lg:max-w-[540px] text-[28px] lg:text-[36px] mb-[30px] lg:mb-0">Online Courses on Design and Development</div>
      <div className="flex-1 max-w-full lg:max-w-[540px] font-normal text-[14px] lg:text-[18px] text-[#444] mt-[6px] mb-[40px] lg:mb-[68px]">
        Welcome to our online course page, where you can enhance your skills
        in design and development. Choose from our carefully curated selection
        of 10 courses designed to provide you with comprehensive knowledge and
        practical experience. Explore the courses below and find the perfect
        fit for your learning journey.
      </div>
    </div>
  );
};

export default CoursesTitle;
