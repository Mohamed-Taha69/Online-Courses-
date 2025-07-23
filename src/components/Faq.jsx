
import Button from '../images/Button.png'
import Button2 from '../images/Button (1).png'


export default function Faq() {
  return (
    <div>
        <div class="faq my-28">
      <div
        class="container w-11/12 bg-[#FFFFFF] m-auto flex justify-between flex-wrap xl:flex-nowrap px-5 md:p-20 rounded-lg"
      >
        <div>
          <h2 class="text-[48px]">
            Frequently <br />
            Asked Questions
          </h2>

          <p>
            Still you have any questions? Contact our <br />
            Team via support@skillbridge.com
          </p>

          <button
            class="mt-5 md:ml-10 border-[#F1F1F3] border-[1px] py-[18px] px-[25px] shadow-xl"
          >
            See All FAQ’s
          </button>
        </div>
        <div>
          <div class="p-[50px] shadow-md rounded-md mb-10 mt-20">
            <div class="flex flex-nowrap justify-between items-center mb-5">
              <p>Can I enroll in multiple courses at once?</p>
              <img class="p-[12px] bg-[#FFF4E5]" src="images/x.png" alt="" />
            </div>
            <p class="text-[#4C4C4D]">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your <br />
              convenience.
            </p>
            <div
              class="flex flex-nowrap justify-between items-center mt-5 py-[20px] px-[30px] bg-[#F7F7F8] rounded-sm"
            >
              <p>Enrollment Process for Different Courses</p>
              <img src= {Button} alt="" />
            </div>
          </div>
          <div
            class="flex flex-nowrap justify-between items-center my-10 border-[#F1F1F3] shadow-md py-[30px] px-[50px] rounded-md"
          >
            <p>What kind of support can I expect from instructors?</p>
            <img src={Button2} alt="" />
          </div>
          <div
            class="flex flex-nowrap justify-between items-center my-10 border-[#F1F1F3] shadow-md py-[30px] px-[50px] rounded-md"
          >
            <p>
              Are the courses self-paced or do they have specific start and end
              dates?
            </p>
            <img src={Button2} alt="" />
          </div>
          <div
            class="flex flex-nowrap justify-between items-center my-10 border-[#F1F1F3] shadow-md py-[30px] px-[50px] rounded-md"
          >
            <p>Are there any prerequisites for the courses?</p>
            <img src={Button2} alt="" />
          </div>
          <div
            class="flex flex-nowrap justify-between items-center my-10 border-[#F1F1F3] shadow-md py-[30px] px-[50px] rounded-md"
          >
            <p>Can I download the course materials for offline access?</p>
            <img src={Button2} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}