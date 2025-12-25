import logo from "../assets/images/Layer 1.png";
import "../styles/Header.css";

export default function Header() {
    return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Quantum Revolution" />
      </div>

      <nav className="header-right">
        <a href="#courses">Courses</a>
        <a href="#healing">Healing</a>
        <a href="#contact">Contact</a>
        <button className="header-btn">Book a call</button>
      </nav>
    </header>
  );
}