import HeroWithImage from './HeroWithImage';
const Problem = () => {
  return (
    <div className="problem">
      <HeroWithImage
        title="Problem"
        description="Currently, agricultural mulch is made of a material that is not easy to
        disintegrate and causes environmental damage."
        image="/src/assets/images/soil-degration.webp"
        button="Learn More"
      />
    </div>
  );
};

export default Problem;
