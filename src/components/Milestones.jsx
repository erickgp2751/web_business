import HeroWithImage from "./HeroWithImage";
import image from "../assets/images/milestones.webp";

const Milestones = () => {
  return (
    <div className="milestones">
      <HeroWithImage
        title="Milestones"
        description="We aspire to be the number one choice in agricultural mulch in Mexico. By 2030, we aim to cover at least 20% of the market, helping more farmers improve their crops efficiently and eco-frie dly."
        image={image}
      />
    </div>
  );
};

export default Milestones;