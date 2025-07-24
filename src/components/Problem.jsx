import HeroWithImage from './HeroWithImage';
import image from "../assets/images/soil.webp";
const Problem = () => {
  return (
    <div className="problem">
      <HeroWithImage
        title="Problem"
        description="Currently, agricultural mulch is made of a slow-to-decompose material that causes environmental damage."
        image={image}
        button="Learn More"
      />
    </div>
  );
};

export default Problem;
