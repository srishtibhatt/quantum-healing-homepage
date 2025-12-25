export default function PopupForm({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h3>Book a Discovery Call</h3>

        <input placeholder="Enter name" />
        <input placeholder="Enter email id" />
        <textarea placeholder="Enter message" rows="4" />

        <button className="primary-btn">Submit</button>
      </div>
    </div>
  );
}
