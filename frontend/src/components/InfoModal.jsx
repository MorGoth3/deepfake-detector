const InfoModal = ({ title, content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default InfoModal;
