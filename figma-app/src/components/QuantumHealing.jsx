import chakraImg from "../assets/images/8575651_3957950.png";
import "../styles/QuantumHealing.css";

export default function QuantumHealing() {
  return (
    <section className="quantum-healing">
      <h2>What is Quantum Healing?</h2>
      <p className="subtitle">
        Where ancient wisdom meets modern physics.
      </p>

      <div className="quantum-content">
        <div className="quantum-left">
          <p>
            Quantum Healing is a holistic method that uses energy,
            consciousness, and principles of quantum physics to promote
            deep healing of the mind, body, and spirit. It helps release
            blockages, restore balance, and activate the body's natural
            healing abilities.
          </p>
        </div>

        <div className="quantum-center">
          <img src={chakraImg} alt="Quantum Healing Chakra" />
        </div>

        <div className="quantum-right">
          <div className="point">
            <span className="arrow">→</span>
            Inspired by Heisenberg, Schrödinger
          </div>
          <div className="point">
            <span className="arrow">→</span>
            Backed by Vedantic Teachings
          </div>
          <div className="point">
            <span className="arrow">→</span>
            Rooted in Consciousness
          </div>
          <div className="point">
            <span className="arrow">→</span>
            Connected through Morphic Fields
          </div>
        </div>
      </div>

      <blockquote>
        “All happenings are played out in one universal consciousness”
        <span>– Erwin Schrödinger –</span>
      </blockquote>
    </section>
  );
}

