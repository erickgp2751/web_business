import "./ImageCard.css";
function ImageCard({ title, text, image, alt }) {
  return (
    <div className="alternating-layout">
      <img 
        src={image} 
        alt={alt} 
        className="alternating-layout-image"
      />
      <div className="alternating-layout-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ImageCard;