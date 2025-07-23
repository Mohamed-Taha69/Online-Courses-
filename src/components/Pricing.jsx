
import Check from '../images/check.png'
import x from '../images/x.png'


export default function Pricing() {
  return (
    <div>
        <div class="Pricing overflow-auto">
      <div class="container mx-auto mt-30">
        {/* <!-- header --> */}
        <div
          class="id our-pricing flex flex-wrap flex-col md:flex-row justify-start pl-5 md:justify-between md:items-center relative pb-30 border-b-[1px] border-[#E4E4E7]"
        >
          <h1 class="md:w-2/4 font-semibold text-[48px]">Our Pricings</h1>
          <p class="md:w-2/4 font-normal text-[#59595A] mt-5">
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
        {/* <!-- buttons --> */}
        <div class="buttons flex justify-center mt-20">
          <div
            class="flex justify-center items-center rounded-[8px] w-fit bg-[#FFFFFF] p-3"
          >
            <button class="bg-[#FF9500] py-3 px-10 rounded-[6px] text-white">
              Monthly
            </button>
            <button class="text-[#4C4C4D] py-3 px-10">Yearly</button>
          </div>
        </div>

        {/* <!-- Cards --> */}
        <div
          class="flex flex-wrap md:flex-nowrap justify-center gap-x-5 mt-5 bg-[#FFFFFF] rounded-md xl:p-20"
        >
          {/* <!-- card-1 --> */}
          <div
            class="text-center bg-[#FCFCFD] py-10 px-10 rounded-md mt-20 border-[#F1F1F3] border-[1px] shadow-md"
          >
            <h2
              class="bg-[#FFF9F0] py-[12px] px-[22px] border-[#FFEACC] border-[1px] rounded-sm font-medium"
            >
              Free Plan
            </h2>
            <div class="my-8">
              <span class="text-7xl text-[#262626]">$0</span>
              <span class="text-[#4C4C4D]">/month</span>
            </div>
            <div
              class="bg-[#FFFFFF] rounded-md border-[1px] border-[#F1F1F3] shadow-sm"
            >
              <div class="px-10">
                <h3 class="my-9 text-[#262626]">Available Features</h3>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Access to selected free courses.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Limited course materials and resources.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Basic community support.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>No certification upon completion.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Ad-supported platform.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#ffffff] p-[6px] rounded-sm shadow-sm"
                    src={x} 
                    alt=""
                  />
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#ffffff] p-[6px] rounded-sm shadow-sm"
                    src={x}
                    alt=""
                  />
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
              <button class="w-[100%] bg-[#FF9500] py-[20px] mt-8 text-white rounded-md">
                Get Started
              </button>
            </div>
          </div>

          {/* <!-- card-2 --> */}
          <div
            class="text-center bg-[#FCFCFD] py-10 px-10 rounded-md mt-20 border-[#F1F1F3] border-[1px] shadow-md"
          >
            <h2
              class="bg-[#FFF9F0] py-[12px] px-[22px] border-[#FFEACC] border-[1px] rounded-sm font-medium"
            >
              Pro Plan
            </h2>
            <div class="my-8">
              <span class="text-7xl text-[#262626]">$79</span>
              <span class="text-[#4C4C4D]">/month</span>
            </div>
            <div
              class="bg-[#FFFFFF] rounded-md border-[1px] border-[#F1F1F3] shadow-sm"
            >
              <div class="px-10">
                <h3 class="my-9 text-[#262626]">Available Features</h3>
                <div
                  class="text-left flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Unlimited access to all courses.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Unlimited course materials and resources.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Priority support from instructors.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Course completion certificates.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Ad-free experience.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
                <div
                  class="flex items-center mt-5 gap-x-5 bg-[#F1F1F3] shadow-sm rounded-md p-[14px]"
                >
                  <img
                    class="bg-[#FFF4E5] p-[6px] rounded-sm shadow-sm"
                    src={Check}
                    alt=""
                  />
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
             <button class="w-[100%] bg-[#FF9500] py-[20px] mt-8 text-white rounded-md" >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}