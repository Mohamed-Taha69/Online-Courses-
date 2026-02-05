

const BenefitsHeader = () => {
  return (
    <div className="relative flex flex-wrap justify-between w-full mx-auto mb-20 md:flex-col md:gap-5">
      <div className="flex-1 gap-1.5">
        <h2 className="h-[72px] w-full content-start font-semibold text-5xl m-0 text-[#262626]">Benefits</h2>
        <p className="font-normal text-[12.5px] leading-[150%] max-w-[800px] text-[#59595A] md:text-sm md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className="self-end mt-auto md:self-start w-full md:w-auto">
        <button className="bg-white border border-[#F1F1F3] rounded-lg px-6 py-[18px] font-medium text-lg text-[#262626] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:bg-[#f9f9f9] md:w-full md:flex md:justify-center">View All</button>
      </div>
    </div>
  );
}

export default BenefitsHeader;