
function CTASection() {
  return (
    <section className="py-10 px-5 bg-white">
     <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row items-start md:items-center text-left md:text-left gap-[40px] md:gap-[300px]">

        {/* CTA Text */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-[28px] mb-[14px]">
            <span className="text-[#FF9500] font-bold">Together</span>, let's shape the future of digital innovation
          </h2>
          <p className="text-[16px] text-[#555]">
            Join us today and take the first step towards mastering design and development.
          </p>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-[#FF9500] text-white rounded-md hover:bg-[#e08000] transition duration-300 whitespace-nowrap">
          Join Now
        </button>
      </div>
    </section>
  );
}

export default CTASection;
