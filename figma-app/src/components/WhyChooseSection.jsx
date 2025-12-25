import "../styles/WhyChooseSection.css"
import WhyChoose from "./WhyChoose";

import designLeft from "../assets/images/Design left.png";
import designRight from "../assets/images/Design right.png";

export default function WhyChooseSection() {
  return (
    <section className="why-choose-wrapper">
      <img
        src={designLeft}
        alt=""
        className="design-left"
        aria-hidden="true"
      />
     
      <div className="why-choose-content">
        <WhyChoose />
      </div>

       <img
        src={designRight}
        alt=""
        className="design-right"
        aria-hidden="true"
      />
    </section>
  );
}
