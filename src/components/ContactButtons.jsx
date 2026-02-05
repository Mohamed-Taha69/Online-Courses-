
import emailIcon from '../images/email.svg';
import phoneIcon from '../images/phone.svg';
import locationIcon from '../images/location.svg';
import fbIcon from '../images/fb.svg';
import xIcon from '../images/x.svg';
import inIcon from '../images/in.svg';

const ContactButtons = () => {
  return (
    <div className="flex flex-col gap-[50px] p-20 justify-start border-l border-[#F1F1F3] items-center md:p-[30px] md:w-full md:border-none md:gap-[25px]">
      <div className="flex flex-col items-center max-w-[360px] h-[155px] w-full gap-4 p-[30px] bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg md:min-w-[298px] md:max-w-[298px] sm:max-w-full sm:min-w-0 sm:p-[15px]">
        <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={emailIcon} alt="email" /></button>
        <p className="font-medium text-base">support@skillbridge.com</p>
      </div>
      <div className="flex flex-col items-center max-w-[360px] h-[155px] w-full gap-4 p-[30px] bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg md:min-w-[298px] md:max-w-[298px] sm:max-w-full sm:min-w-0 sm:p-[15px]">
        <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={phoneIcon} alt="phone" /></button>
        <p className="font-medium text-base">+91 00000 00000</p>
      </div>
      <div className="flex flex-col items-center max-w-[360px] h-[155px] w-full gap-4 p-[30px] bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg md:min-w-[298px] md:max-w-[298px] sm:max-w-full sm:min-w-0 sm:p-[15px]">
        <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={locationIcon} alt="location" /></button>
        <p className="font-medium text-base">Some Where in the World</p>
      </div>
      <div className="flex flex-col items-center max-w-[360px] h-[155px] w-full gap-4 p-[30px] bg-[#FCFCFD] border border-[#F1F1F3] rounded-lg md:min-w-[298px] md:max-w-[298px] sm:max-w-full sm:min-w-0 sm:p-[15px]">
        <div className="flex justify-center gap-4">
          <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={fbIcon} alt="facebook" /></button>
          <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={xIcon} alt="twitter" /></button>
          <button className="bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg p-3.5 w-[52px] h-[52px] flex items-center justify-center cursor-pointer hover:opacity-80"><img src={inIcon} alt="linkedin" /></button>
        </div>
        <p className="font-medium text-base">Social Profiles</p>
      </div>
    </div>
  );
};

export default ContactButtons;
