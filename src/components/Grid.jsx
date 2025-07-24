
import "./Grid.css";

const Grid = ({ images }) => {
  return (
    <div className="grid-container">
      <div className="grid-grid">
        {images.map((image) => (
          <div key={image.id} className="grid-card">
            <img src={image.src} alt={image.alt} className="grid-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;