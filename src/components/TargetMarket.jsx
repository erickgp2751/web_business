import Carousel from "./Carousel";

const images = [
  <img src="/src/assets/images/target_market/env-people.webp" alt="Imagen 1" />,
  <img src="/src/assets/images/target_market/ecological-consumer.webp" alt="Imagen 2" />,
  <img src="/src/assets/images/target_market/goodstores.webp" alt="Imagen 3" />,
  <img src="/src/assets/images/target_market/farmer.webp" alt="Imagen 4" />,
];

const TarjetMarket = () => {
  return (
    <div className="target-market">
      <section>
        <h2>Target Market</h2>
        <p>
          People concerned about the environment, buyers of organic products,
          home decor stores, and farmers looking for a natural, chemical-free
          way to mulch and care for the soil.
        </p>
        <Carousel items={images} />
      </section>
    </div>
  );
};

export default TarjetMarket;
