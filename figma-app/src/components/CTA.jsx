import heroImage from "../assets/images/wavy-lines-making-circle.png";
import "../styles/Cta.css";

export default function CTA({ onOpenForm }) {
  return (
    <section className="cta-hero">
      <div className="cta-content">
        <h1>Unlock the Power of Quantum Healing</h1>

        <p>
          Discover a revolutionary healing path that blends science, spirit &
          ancient wisdom to transform your life
        </p>

        <button className="primary-btn" onClick={onOpenForm}>
          Start Your Healing Journey
        </button>
      </div>

      <div className="cta-image">
        <img src={heroImage} alt="Quantum Healing Visual" />
      </div>
    </section>
  );
}
