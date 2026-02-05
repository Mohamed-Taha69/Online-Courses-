
import num1Icon from '../images/Number.svg';
import num2Icon from '../images/Number (1).svg';
import num3Icon from '../images/Number (2).svg';
import num4Icon from '../images/Number (3).svg';
import num5Icon from '../images/Number (4).svg';
import num6Icon from '../images/Number (5).svg';
import vectorIcon from '../images/Vector (Stroke).svg';
const BenefitsCards = () => {
  return (
    <div className="relative flex flex-wrap justify-between w-full mx-auto gap-5 md:flex-col md:gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full md:grid-cols-1">
        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num1Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Flexible Learning Schedule</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Fit your coursework around your existing commitments and obligations.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num2Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Expert Instruction</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Learn from industry experts who have hands-on experience in design and development.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num3Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Diverse Course Offerings</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Explore a wide range of design and development courses covering various topics.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full md:grid-cols-1">
        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num4Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Updated Curriculum</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Access courses with up-to-date content reflecting the latest trends and industry practices.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num5Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Practical Projects and Assignments</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Develop a portfolio showcasing your skills and abilities to potential employers.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl w-full max-w-[438px] md:max-w-full min-h-[437px] p-6 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <p className="flex justify-end w-full h-[59px] text-[80px] md:text-[50px] text-[#262626] leading-6 font-bold"><img src={num6Icon} alt="" /></p>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#333333] font-semibold text-xl">Interactive Learning Environment</h3>
            <p className="text-[#4C4C4D] text-base leading-normal font-normal">
              Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.
            </p>
          </div>
          <div className="w-[74px] h-[74px] bg-[#FCFCFD] self-end mt-6 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9]">
            <button className="w-full h-full bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg p-5 flex items-center justify-center">
              <img className="w-[34px] h-[34px] p-2" src={vectorIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCards;
