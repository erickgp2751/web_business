
function Card({ title, content, src }) {
  return (
    <div className="card">
      {src && <img src={src} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Card;