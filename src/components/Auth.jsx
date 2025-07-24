import React from 'react'
import Google from '../images/Google__G__logo.svg.webp'
import profileImg from '../images/profileImg.jpg'
 function Auth() {
  return (
    <> 
      <section className="w-full px-1 md:px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div  className="order-2 md:order-1">
        <h2 className="text-2xl font-semibold mb-2">Students Testimonials</h2>
        <p className="text-sm text-gray-500 mb-5">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh at. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="bg-white rounded-xl shadow p-6 ">
          <p className="text-sm m-5 text-gray-700 mb-10">
            The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging.
             I highly recommend it!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={profileImg} className="w-12 h-12 rounded-xl" alt="Sarah L" />
              <span className="text-sm font-medium text-gray-800">Sarah L</span>
            </div>
            <button className="p-3 bg-gray-100 rounded-md text-sm font-medium cursor-pointer">Read Full Story</button>
          </div>
        </div>
        <div className=" justify-center flex md:justify-end gap-2 mt-6">
          <button className="w-10 h-10 rounded-md border border-gray-100 bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="w-10 h-10 rounded-md border border-gray-100 bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      
      
      <div className=" bg-white rounded-xl shadow p-8 order-1 md:order-2">
        <h2 className="text-2xl font-semibold mb-1 text-center">Login</h2>
        <p className="text-xs px-1 md:text-sm text-gray-500 mb-6 text-center">Welcome back! Please log in to access your account.</p>
        <form className="space-y-4 w-full md:w-[98%] mx-auto">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your Email" className="w-full md:w-[98%] md:mx-auto border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-2 focus:border-orange-400" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" for="Password">Password</label>
            <div className="relative">
              <input type="password" id="Password" placeholder="Enter your Password" className="w-full md:w-[98%] md:mx-auto border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-2 focus:border-orange-400" />
              <i className="fa-solid fa-eye absolute right-[5%] top-1/2 translate-y-[-50%] text-gray-400 cursor-pointer hover:text-orange-500"></i>
            </div>
            <div className="text-right mt-1 me-5">
              <a href="#" className="text-xs text-gray-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="" />
            <label for="remember" className="text-sm text-gray-700">Remember Me</label>
          </div> 
  
          <button type="submit" className="w-full md:w-[95%] bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold text-sm cursor-pointer">Login</button> 
  
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          <button type="button" className="w-full border border-gray-100 bg-gray-200 md:w-[95%] flex items-center justify-center gap-2  px-4 py-2 rounded-md  text-sm cursor-pointer">
            <img src={Google} alt="Google" className="w-5 h-5" />
            Login with Google
          </button>
          <p className="text-sm text-center text-gray-500 mt-4">
            Don’t have an account? <a href="#" className="text-black font-medium underline underline-offset-2">Sign Up <i className="fa-solid fa-arrow-right fa-rotate-by mt-1 text-lg"  style={{ "--fa-rotate-angle": "320deg" }}></i></a>
          </p>
        </form>
      </div>
    </section>
    
    
    </>
  )
}
export default Auth