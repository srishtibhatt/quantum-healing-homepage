import Courses from "./Courses";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import "../styles/home.css";
import Founders from "./Founders";
import Contact from "./Contact";
import QuantumHealing from "./QuantumHealing";
import header from "../assets/images/Header.png";

export default function Home() {
  return (
    <div className="home">
  <header />
  <CTA />

  <section className="section">
    <Courses />
  </section>

  <section className="section">
    <Testimonials />
  </section>

  <section className="section">
    <Founders />
  </section>

  <section className="section">
    <QuantumHealing />
  </section>

  <section className="section contact-section">
    <Contact />
  </section>


  <Footer/>
</div>

  );
}


