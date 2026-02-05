import React from 'react';

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
    <div className="max-w-[1200px] mx-auto p-5 lg:p-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#333]">Our Testimonials</h1>
          <p className="max-w-[600px] mb-5 leading-[1.6] text-[#666]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="text-[#333] font-medium no-underline text-base bg-transparent border-none cursor-pointer p-0" onClick={() => console.log('View all testimonials')}>View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
        {testimonials.map((testimonial, index) => (
          <div className="bg-white rounded-xl p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col" key={index}>
            <p className="mb-5 leading-[1.6]">{testimonial.content}</p>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <span className="font-semibold text-base">{testimonial.name}</span>
              </div>
              <button className="text-[#333] no-underline font-medium text-sm bg-transparent border-none cursor-pointer p-0" onClick={() => console.log(`Read full story of ${testimonial.name}`)}>Read Full Story</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
