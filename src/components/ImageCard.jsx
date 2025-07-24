import "./ImageCard.css";

function ImageCard({ title, text, image, alt, imageOnLeft = true }) {
  return (
    <div className={`image-card ${imageOnLeft ? '' : 'image-right'}`}>
      <div className="image-container">
        <img 
          src={image} 
          alt={alt} 
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ImageCard;