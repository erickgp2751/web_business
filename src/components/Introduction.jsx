import HeroWithImage from "./HeroWithImage";
const Introduction = () => {
  return (
    <div className="introduction">
      <HeroWithImage
        title="What is agricultural mulching?"
        description="Agricultural mulch, also known as weed control fabric, prevents the
        growth of unwanted plants that compete with crops for nutrients, water,
        and light."
        image="/src/assets/images/mulching.webp"
        button="Learn More"
      />
    </div>
  );
};

export default Introduction;
