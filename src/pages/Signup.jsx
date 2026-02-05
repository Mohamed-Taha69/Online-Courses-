import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import personImg from '../images/person-1.png';
import googleImg from '../images/Google__G__logo.svg.webp';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-2.5 md:p-5 bg-[#f8f9fa]">
      <div className="w-full max-w-[450px] md:max-w-[1000px] lg:max-w-[1000px] bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row overflow-hidden border border-[#e0e0e0]">
        <div className="flex-1 bg-[#F8F8F8] p-[30px_20px] md:p-10 flex flex-col justify-center">
          <div className="max-w-full md:max-w-[500px]">
            <h2 className="text-[1.3rem] md:text-2xl font-semibold mb-[15px] text-[#333]">Students Testimonials</h2>
            <p className="text-[0.85rem] md:text-[0.9rem] text-[#666] mb-[30px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim elementum et. Ac cum eget malesuada in velit. Rhoncus feugiat vehicula in.
            </p>

            <div className="relative">
              <p className="text-[0.85rem] md:text-[0.95rem] text-[#333] mb-5 leading-[1.6]">
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging and effective.
              </p>
              <div className="flex items-center gap-[10px] mb-5">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={personImg} alt="Sarah L." className="w-full h-full object-cover" />
                </div>
                <p className="text-[0.9rem] font-medium">Sarah L.</p>
              </div>
              <div className="flex gap-[10px] mb-5">
                <button className="w-8 h-8 rounded-full border border-[#e0e0e0] bg-white flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#f0f0f0]">
                  <FontAwesomeIcon icon={faArrowLeft} className="text-[0.8rem] text-[#333]" />
                </button>
                <button className="w-8 h-8 rounded-full border border-[#e0e0e0] bg-white flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#f0f0f0]">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[0.8rem] text-[#333]" />
                </button>
              </div>
              <div className="mt-[10px]">
                <button className="bg-transparent border-none p-0 text-[0.9rem] font-medium text-[#333] cursor-pointer" onClick={() => console.log('Read more clicked')}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-[30px_20px] md:p-10 flex flex-col justify-center">
          <div className="max-w-full md:max-w-[400px] w-full mx-auto">
            <h1 className="text-[1.6rem] xs:text-[1.4rem] md:text-[1.8rem] font-semibold mb-[10px] text-[#333] text-center">Sign Up</h1>
            <p className="text-[#666] mb-[30px] text-center text-[0.9rem]">Create an account to unlock exclusive features.</p>
            <form>
              <div className="relative mb-5">
                <label htmlFor="fullname" className="block text-[0.9rem] font-medium mb-2 text-[#333]">Full Name</label>
                <input type="text" id="fullname" placeholder="Enter your Name" className="w-full p-[12px_15px] border border-[#e0e0e0] rounded-md text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-[#FF8A00] placeholder:text-[#999]" />
              </div>
              <div className="relative mb-5">
                <label htmlFor="email" className="block text-[0.9rem] font-medium mb-2 text-[#333]">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" className="w-full p-[12px_15px] border border-[#e0e0e0] rounded-md text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-[#FF8A00] placeholder:text-[#999]" />
              </div>
              <div className="relative mb-5">
                <label htmlFor="password" className="block text-[0.9rem] font-medium mb-2 text-[#333]">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" className="w-full p-[12px_15px] border border-[#e0e0e0] rounded-md text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-[#FF8A00] placeholder:text-[#999]" />
                <FontAwesomeIcon icon={faEyeSlash} className="absolute right-[15px] top-[42px] cursor-pointer text-[#666]" />
              </div>
              <div className="flex items-center gap-[10px] mb-5">
                <input type="checkbox" id="terms" className="w-4 h-4 accent-[#FF8A00]" />
                <label htmlFor="terms" className="text-[0.85rem] text-[#666]">
                  I agree with <button type="button" className="bg-transparent border-none p-0 text-[inherit] font-medium text-[#0066FF] cursor-pointer" onClick={() => console.log('Terms clicked')}>Terms of Use</button> and <button type="button" className="bg-transparent border-none p-0 text-[inherit] font-medium text-[#0066FF] cursor-pointer" onClick={() => console.log('Privacy clicked')}>Privacy Policy</button>
                </label>
              </div>
              <button type="submit" className="w-full p-[12px] bg-[#FF8A00] text-white border-none rounded-md text-[0.95rem] font-medium cursor-pointer transition-colors duration-300 hover:bg-[#e67e00] mb-5">Sign Up</button>
              <div className="relative text-center my-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[45%] before:h-px before:bg-[#e0e0e0] after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[45%] after:h-px after:bg-[#e0e0e0]">
                <span className="inline-block px-[10px] bg-white relative z-10 text-[#666] text-[0.85rem]">OR</span>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-[10px] p-[12px] border border-[#e0e0e0] rounded-md bg-white text-[0.9rem] font-medium text-[#333] cursor-pointer transition-colors duration-300 hover:bg-[#f8f9fa] mb-5">
                <img src={googleImg} alt="Google" className="w-[18px] h-[18px]" />
                Sign Up with Google
              </button>
              <div className="text-center text-[0.85rem] text-[#666]">
                Already have an account? <Link to="/login" className="bg-transparent border-none p-0 text-[inherit] font-medium text-[#0066FF] cursor-pointer no-underline">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
