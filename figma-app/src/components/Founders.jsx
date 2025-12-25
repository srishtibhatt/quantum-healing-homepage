import ekta from "../assets/images/Frame 42.png";
import francois from "../assets/images/Frame 42 (1).png";

import "../styles/Founders.css";

export default function Founders() {
  return (
    <section className="founders-outer">
        <h3 className="founders-tagline">
  Two Souls. One Mission. Conscious Evolution.
</h3>
      <div className="founders-profiles">
        <div className="founder">
          <img src={ekta} alt="Ekta Bouderlique" />
          <p className="founder-name">Ekta Bouderlique</p>
          <p className="founder-role">
            Heartfulness trainer, eco-leader, quantum visionary.
          </p>
        </div>

        <div className="founder">
          <img src={francois} alt="François Bouderlique" />
          <p className="founder-name">François Bouderlique</p>
          <p className="founder-role">
            Former ESA consultant turned conscious economy expert.
          </p>
        </div>
      </div>

     
      <div className="founders-content">
        <h2>Meet the Founders</h2>

        <p>
          Quantum (R)Evolution was founded by Ekta and François Bouderlique with a
          shared vision to bridge science, consciousness, and real-world healing
          practices.
        </p>

        <div className="founders-cta">
          <h3>Time is short. Opportunity is great.</h3>
          <button className="primary-btn">Book a discovery call</button>
        </div>
      </div>
    </section>
  );
}

