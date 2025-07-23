
import './HeroWithImage.css';

function HeroWithImage({ title, description, image, button }) {
  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <button className="hero-button">{button}</button>
      </div>
    </div>
  );
}

export default HeroWithImage;
