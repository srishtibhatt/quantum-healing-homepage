// import "../styles/Contact.css";
// import footerCard from "../assets/images/Card.png";

// export default function Contact() {
//   return (
//     <section className="contact-section">
//       <h2 className="contact-title">Contact Us</h2>

//       <div className="contact-card">
//         <h3 className="contact-subtitle">
//             Transform Your Life. Let’s Begin.
//         </h3>

//         <input type="text" placeholder="Enter name" />
//         <input type="email" placeholder="Enter email id" />
//         <textarea placeholder="Enter message" />

//         <button className="primary-btn full-width">Book now</button>
//       </div>

//       <div className="contact-footer">
//         <img src={footerCard} alt="Footer Card" />
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import "../styles/Contact.css";
import footerCard from "../assets/images/Card.png";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw8r39kH__L449qb9i5s3Wy5Wjr3GS_CjAdqVUhkX3HVtVTW5bEhYmPDUlFm60ZTL1l/exec";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    alert("Thank you! We will contact you soon.");

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>

      <form className="contact-card" onSubmit={handleSubmit}>
        <h3 className="contact-subtitle">
          Transform Your Life. Let’s Begin.
        </h3>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="primary-btn full-width">
          Book now
        </button>
      </form>

      <div className="contact-footer">
        <img src={footerCard} alt="Footer Card" />
      </div>
    </section>
  );
}
