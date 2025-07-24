import HeroWithImage from "./HeroWithImage";
const Introduction = () => {
  return (
    <div className="introduction">
      <HeroWithImage
        title="What is agricultural mulching?"
        description="Agricultural mulching, also known as weed-control fabric, prevents the growth of nutrient-stealing plants that compete with crops for water and light."
        image="/src/assets/images/agricultural-mulching.webp"
        button="Learn More"
      />
    </div>
  );
};

export default Introduction;
