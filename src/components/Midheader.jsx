
import React from 'react' 
import Container from '../images/Container.png' 
import img2 from '../images/img2.png' 
import img3 from '../images/img3.png' 
import img4 from '../images/img4.png' 
import img5 from '../images/img5.png' 
import img6 from '../images/img6.png' 
import img7 from '../images/img7.png' 
import videoImg from '../images/videoImg.png'   

export default function Midheader() {
  return (
    <>  
    <section className="w-full  px-4 py-10 bg-[#f9f9f9] text-gray-900">
      <div className="text-center space-y-4">
        <div className="inline-flex relative items-center justify-center gap-2 px-2 py-1 bg-white shadow rounded-lg w-fit mx-auto">
          <span className="  bg-[#ffedd5] p-2 rounded-lg w-11 h-11 text-center"> <i className="fa-solid fa-bolt text-black text-2xl"></i></span>
          <span className="text-sm md:text-4xl font-semibold ">
            <span className="text-[#fb923c] ">Unlock</span> Your Creative Potential
          </span> 
          <div className="line h-5 w-[2px] border-top bg-black absolute left-[-20px] top-[-20px] rotate-320"></div>
        </div>
        <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800">
          with Online Design and Development Courses.
        </h2>
        <p className="text-xl ms-3  md:text-sm text-black">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white md:px-5 md:py-2 px-2 py  rounded-md font-medium text-sm">
            Explore Courses
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md font-medium text-sm">
            View Pricing
          </button>
        </div>
      </div>
    </section>

  
    <section className="bg-white py-4 px-4 shadow-sm w-full rounded-lg flex flex-wrap justify-around items-center gap-6">
        <img src={Container} alt="Brand Logo" className="h-14 w-14" />
        <img src={img2} alt="Brand Logo" className="h-14 w-14" />
        <img src={img3}  alt="Brand Logo" className="h-14 w-14" />
        <img src={img4}  alt="Brand Logo" className=" hidden md:inline h-14 w-14" />
        <img src={img5}  alt="Brand Logo" className=" hidden md:inline h-14 w-14" />
        <img src={img6}  alt="Brand Logo" className=" hidden md:inline h-14 w-14" />
        <img src={img7}  alt="Brand Logo" className="hidden md:inline h-14 w-14" />
      
        
    </section>

    
    <section className="w-full px-4 py-10">
      <div className="rounded-xl overflow-hidden shadow-md relative">
        <img src={videoImg} alt="Course Preview" className="w-full h-auto " />
        <button className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-400 bg-opacity-70 w-18 h-18 md:w-12 md:h-12 flex items-center justify-center rounded-full border-[6px] border-gray-200 hover:scale-105 transition duration-300">
          <i className="fa-solid fa-play text-white text-xl text-center"></i>
        </button>
      </div>
    </section>
   
   </>
  )
}
