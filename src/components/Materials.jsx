import Card from "./Card";
import "./materials.css";

const Materials = () => {
  return (
    <section>
      <div>
        <h2>Materials</h2>
        <div className="materials-container">
          <Card
            title="Corn or potato starch"
            content="Main component that acts as a biodegradable binder."
            src="/src/assets/images/corn.webp"
          />
          <Card
            title="Glycerol or glycerin"
            content="It works as a plasticizer, providing flexibility to the material"
            src="/src/assets/images/Glycerin.webp"
          />
          <Card
            title="Distilled water"
            content="Helps dissolve starch and mix ingredients"
            src="/src/assets/images/DistelledWater.webp"
          />
          <Card
            title="Vegetable fiber"
            content="The fibers act as reinforcement, increasing the durability of the padding."
            src="/src/assets/images/VegetableFiber.webp"
          />
          <Card
            title="White vinegar"
            content="Helps improve material cohesion and reduce the chance of mold forming in the padding during use"
            src="/src/assets/images/WhiteVinegar.webp"
          />
          <Card
            title="Natural dyes"
            content="This makes the material visually easier to distinguish from the ground."
            src="/src/assets/images/naturalDyes.webp"
          />
        </div>
        <p className="materials-description">Carefully designed to maximize efficiency and adapt to all types of crops. Its perfectly tailored long-distance dimensions guarantee six-months of mulching, biodegrade without leaving residue, and meet growers' needs with efficient moisture retention and light blocking.</p>
      </div>
    </section>
  );
};

export default Materials;
