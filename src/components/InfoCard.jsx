

function InfoCard({ img, title, desc }) {
  return (
    <div className="grid gap-6 bg-white rounded-xl p-[30px] md:p-[40px] shadow-sm">
      <img src={img} alt={title} className="w-[56px] h-[56px]" />
      <h4 className="text-[24px] leading-[1.5] text-[#262626] font-semibold">{title}</h4>
      <p className="text-[18px] text-[#59595A] leading-[1.5] font-normal">{desc}</p>
    </div>
  );
}

export default InfoCard;