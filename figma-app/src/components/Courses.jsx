import "../styles/Courses.css";

const courses = [
  {
    title: "Quantum Healing Foundation Course",
    description:
      "Heal from within & become a source of transformation for others.",
    duration: "6 Days · Available online",
    price: "$500",
  },
  {
    title: "Quantum Advanced Therapy Course",
    description:
      "Master deep healing methods using quantum biology, morphic fields & energy resonance.",
    duration: "12 Days · Practitioner Level",
    price: "$850",
  },
  {
    title: "Quantum Mapping with François",
    description:
      "Reprogram your life for health, wealth & harmony by mapping goals from the heart.",
    duration: "1-on-1 Session · By Appointment",
    price: "$500",
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>Our Signature Courses Built for Transformation</h2>
        <span className="view-all">View All</span>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.description}</p>

            <p className="course-duration">{course.duration}</p>

            <div className="course-footer">
              <span className="course-price">{course.price}</span>
              <button className="course-btn">View details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

