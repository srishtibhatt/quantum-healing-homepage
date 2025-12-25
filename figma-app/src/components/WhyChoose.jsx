import "../styles/WhyChoose.css";

const points = [
  "Scientifically Rooted, Spiritually Empowered",
  "Heal Yourself & Others Onsite or at a Distance",
  "Real-Life Transformation from Anxiety & Chronic Fatigue",
  "Courses Tailored for Busy Modern Lives",
  "Globally Certified Quantum Healing Instructors",
  "Immediate Integration into Your Lifestyle",
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>
        Why Choose Quantum <br />
        (R) Evolution?
      </h2>

      <ul className="why-list">
        {points.map((text, i) => (
          <li key={i}>
            <span className="arrow">→</span>
            <p>{text}</p>
          </li>
        ))}
      </ul>

      <button className="why-btn">Book a discovery call</button>
    </section>
  );
}
