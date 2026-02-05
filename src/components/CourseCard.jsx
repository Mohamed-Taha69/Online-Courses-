import React from 'react';


const CourseCard = ({ title, description, images, duration, level, author, modules }) => {
  return (
    <div className="max-w-[1596px] mx-auto my-10 p-[30px] md:p-[50px] border border-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-5 gap-2.5 md:gap-0">
        <div className="max-w-full md:max-w-fit">
          <h2 className="text-2xl mb-2.5"> {title} </h2>
          <p className="text-[#59595A] max-w-[1286px]">{description}</p>
        </div>
        <button className="bg-[#FCFCFD] border-none px-5 py-2.5 rounded-lg cursor-pointer">View Course</button>
      </div>

      <div className="flex gap-2.5 my-5 max-h-[228px]">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Course image ${idx + 1}`} className="w-1/3 max-h-[422px] object-cover rounded-lg" />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 text-sm text-[#555] mb-[30px]">
        <div className="flex flex-row">
          <div className="border border-[#F1F1F3] rounded-lg h-[43px] w-[110px] flex items-center justify-center mr-2.5">{duration}</div>
          <div className="border border-[#F1F1F3] rounded-lg h-[43px] w-[110px] flex items-center justify-center">{level}</div>
        </div>
        <div className="ml-0 md:ml-auto flex items-center">By {author}</div>
      </div>

      <div>
        <h3 className="text-base md:text-xl mb-2.5 font-bold">Curriculum</h3>
        <div className="flex flex-col md:flex-row justify-between gap-2.5 flex-wrap items-start md:items-stretch">
          {modules.map((mod, idx) => (
            <div key={idx} className="flex-1 min-w-[140px] bg-[#f8f8f8] p-[15px] rounded-lg text-left md:text-center w-full md:w-auto">
              <span className="block font-bold text-xl text-black mb-1">{String(idx + 1).padStart(2, '0')}</span>
              <p className="text-sm text-[#333]">{mod}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
