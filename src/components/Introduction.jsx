import HeroWithImage from "./HeroWithImage";
import image from "../assets/images/agricultural-mulching.webp";

const Introduction = () => {
  return (
    <div className="introduction">
      <HeroWithImage
        title="What is agricultural mulching?"
        description="Agricultural mulching, also known as weed-control fabric, prevents the growth of nutrient-stealing plants that compete with crops for water and light."
        image={image}
        button="Learn More"
      />
    </div>
  );
};

export default Introduction;
