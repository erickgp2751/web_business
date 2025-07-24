
import './HeroWithImage.css';

function HeroWithImage({ title, description, image}) {
  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
      </div>
    </div>
  );
}

export default HeroWithImage;
