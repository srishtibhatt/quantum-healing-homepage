import "../styles/Contact.css";
import footerCard from "../assets/images/Card.png";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-card">
        <h3 className="contact-subtitle">
            Transform Your Life. Let’s Begin.
        </h3>

        <input type="text" placeholder="Enter name" />
        <input type="email" placeholder="Enter email id" />
        <textarea placeholder="Enter message" />

        <button className="primary-btn full-width">Book now</button>
      </div>

      <div className="contact-footer">
        <img src={footerCard} alt="Footer Card" />
      </div>
    </section>
  );
}
