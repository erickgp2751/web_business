import HeroWithImage from './HeroWithImage';
const Problem = () => {
  return (
    <div className="problem">
      <HeroWithImage
        title="Problem"
        description="Currently, agricultural mulch is made of a slow-to-decompose material that causes environmental damage."
        image="/src/assets/images/soil.webp"
        button="Learn More"
      />
    </div>
  );
};

export default Problem;
