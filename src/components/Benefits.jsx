import React from "react";

import BenefitsHeader from "./BenefitsHeader";
import BenefitsCards from "./BenefitsCards";

const Benefits = () => {
   return (
      <section className="w-full mx-auto py-20 px-5 gap-20 md:py-10 md:px-4 md:gap-10">
         <BenefitsHeader />
         <BenefitsCards />
      </section>
   );
};
export default Benefits;
