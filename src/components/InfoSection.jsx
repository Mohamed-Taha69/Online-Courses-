
import InfoCard from "./InfoCard";

function InfoSection({ title, description, items }) {
  return (
    <section className="py-[60px]">
      <div className="flex flex-col gap-[50px] md:gap-[80px] px-4 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 mb-2">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-[18px] text-[#59595A] leading-[1.5] max-w-full">
            {description}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <InfoCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection