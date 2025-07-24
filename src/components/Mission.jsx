import ImageCard from "./ImageCard";
import image from "../assets/images/mission.webp";

const Mission = () => {
  return (
    <div className="mision">
      <ImageCard
        imageOnLeft={true}
        image={image}
        alt="Mission Image"
        title="Mission"
        text="To offer high-quality agricultural mulches that improve crop yield and promote sustainable agriculture."
      />
    </div>
  );
};

export default Mission;
