import "../styles/Testimonials.css";
import avatar from "../assets/images/div.avarta.png";
import avatar1 from "../assets/images/div.avarta (1).png";
import avatar2 from "../assets/images/div.avarta (2).png";

const testimonials = [
  {
    name: "Padmini",
    city: "Gorakhpur",
    avatar: avatar,
    text:
      "I suffered from ALS. After one quantum session, my pain reduced and I’ve been sleeping better. I feel calm.",
  },
  {
    name: "Jayesh",
    city: "Allahabad",
    avatar: avatar1,
    text:
      "After one healing with my father, he slept peacefully for 7 hours for the first time in years.",
  },
  {
    name: "Anonymous",
    city: "Chennai",
    avatar: avatar2,
    text:
      "Bala’s session felt like being recharged at the soul level.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Real People. Real Transformations.</h2>
        <span className="view-all">View All</span>
      </div>

      <div className="testimonials-row">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img
                src={item.avatar}
                alt={`${item.name} profile`}
                className="testimonial-avatar"
                aria-hidden="true"
              />
            <p className="testimonial-text">{item.text}</p>

            <div className="testimonial-footer">
              <strong>{item.name}</strong>
              <span>{item.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
