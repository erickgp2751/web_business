import ImageCard from "./ImageCard";
import image from "../assets/images/qualityProduct.webp";
const Identity = () => {
  return (
    <div className="identity">
      <ImageCard
      imageOnLeft={false} 
        image={image}
        alt="Identity Image"
        title="Identity"
        text="We anticipate our product being perceived as a reliable and cost-saving solution in the future."
      />
    </div>
  );
};

export default Identity;
