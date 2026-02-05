

const ContactHeader = () => {
  return (
    <div className="flex justify-center pt-[150px] border-b border-[#E4E4E7] md:pt-[50px] md:pb-[30px] md:gap-4 md:flex-col md:items-center sm:pt-[30px] sm:pb-[15px] sm:gap-[15px]">
      <div className="max-w-[1200px] w-full flex justify-between flex-wrap px-5 pb-[50px] md:flex-col md:items-center md:pb-[30px] md:px-0 sm:px-[10px] sm:pb-[15px]">
        <div className="flex-1 min-w-[250px] md:min-w-full">
          <h2 className="font-semibold text-5xl text-[#262626] self-start md:text-[28px] sm:text-[26px]">Contact Us</h2>
        </div>
        <div className="flex-[2] min-w-[300px] max-w-[748px] md:min-w-full">
          <p className="text-lg text-[#59595A] leading-[150%] max-w-[748px] m-0 md:text-sm md:max-w-full sm:px-[10px]">
            Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
