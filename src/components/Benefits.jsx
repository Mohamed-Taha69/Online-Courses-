import React from "react";
import styles from "./Benefits.module.css";
import BenefitsHeader from "./BenefitsHeader";
import BenefitsCards from "./BenefitsCards";

const Benefits = () => {
  return (
    <section className={styles["Benefits"]}>
       <BenefitsHeader />
       <BenefitsCards />
    </section> 
 );
};
export default Benefits;
