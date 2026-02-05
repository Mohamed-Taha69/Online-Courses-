import React from 'react';

import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-5 text-[#0A033C] border-t border-[#E7E5EA]">
      <div className="max-w-[1200px] mx-auto px-5 w-full">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-[30px] md:gap-0">
          {/* Company Info Section */}
          <div className="flex-1 max-w-full md:max-w-[250px]">
            <div className="mb-[25px] md:mb-5">
              <img src={logo} alt="Skillbridge Logo" className="h-[35px] md:h-10" />
            </div>
            <div className="">
              <p className="text-[13px] md:text-sm leading-[2] text-[#5B5B5B] flex items-center mb-[15px] md:mb-2.5"><i className="far fa-envelope mr-2.5 text-[#5B5B5B] w-4"></i> hello@skillbridge.com</p>
              <p className="text-[13px] md:text-sm leading-[2] text-[#5B5B5B] flex items-center mb-[15px] md:mb-2.5"><i className="fas fa-phone mr-2.5 text-[#5B5B5B] w-4"></i> +91 91813 23 2309</p>
              <p className="text-[13px] md:text-sm leading-[2] text-[#5B5B5B] flex items-center mb-[15px] md:mb-2.5"><i className="fas fa-map-marker-alt mr-2.5 text-[#5B5B5B] w-4"></i> Somewhere in the World</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-[2] flex flex-col md:flex-row justify-around flex-wrap gap-[25px] md:gap-0">
            <div className="basis-full md:basis-auto w-full md:w-auto">
              <h3 className="text-[15px] md:text-base font-semibold mb-[15px] md:mb-5 text-[#0A033C]">Home</h3>
              <ul className="list-none mt-[10px] md:mt-0">
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Benefits</a></li>
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Our Courses</a></li>
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Our Testimonials</a></li>
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Our FAQ</a></li>
              </ul>
            </div>
            <div className="basis-full md:basis-auto w-full md:w-auto">
              <h3 className="text-[15px] md:text-base font-semibold mb-[15px] md:mb-5 text-[#0A033C]">About Us</h3>
              <ul className="list-none mt-[10px] md:mt-0">
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Company</a></li>
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Achievements</a></li>
                <li className="mb-[10px] md:mb-3"><a className="text-[#5B5B5B] no-underline text-[13px] md:text-sm transition-colors duration-300 hover:text-[#4353FF] cursor-pointer">Our Goals</a></li>
              </ul>
            </div>
            <div className="basis-full md:basis-auto w-full md:w-auto">
              <h3 className="text-[15px] md:text-base font-semibold mb-[15px] md:mb-5 text-[#0A033C]">Social Profiles</h3>
              <div className="flex gap-[15px] mt-[5px] md:mt-2.5">
                <a href="https://facebook.com" aria-label="Facebook" className="flex items-center justify-center w-[30px] h-[30px] md:w-8 md:h-8 rounded-full bg-[#F2F2F2] text-[#5B5B5B] no-underline transition-all duration-300 hover:bg-[#4353FF] hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" aria-label="Twitter" className="flex items-center justify-center w-[30px] h-[30px] md:w-8 md:h-8 rounded-full bg-[#F2F2F2] text-[#5B5B5B] no-underline transition-all duration-300 hover:bg-[#4353FF] hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="flex items-center justify-center w-[30px] h-[30px] md:w-8 md:h-8 rounded-full bg-[#F2F2F2] text-[#5B5B5B] no-underline transition-all duration-300 hover:bg-[#4353FF] hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#E7E5EA] pt-[15px] md:pt-5 text-center mt-[10px] md:mt-0">
          <p className="text-[12px] md:text-sm text-[#5B5B5B]">&copy; 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
