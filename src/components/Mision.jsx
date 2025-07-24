import ImageCard from "./ImageCard";
import image from "../assets/images/mision.webp";

const Mision = () => {
  return (
    <div className="mision">
      <ImageCard
        imageOnLeft={true}
        image={image}
        alt="Mission Image"
        title="Mision"
        text="To offer high-quality agricultural mulches that improve crop yield and promote sustainable agriculture."
      />
    </div>
  );
};

export default Mision;
