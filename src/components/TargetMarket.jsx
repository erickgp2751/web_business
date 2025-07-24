import Carousel from "./Carousel";

import envPeopleImg from "../assets/images/target_market/env-people.webp";
import ecologicalConsumerImg from "../assets/images/target_market/ecological-consumer.webp";
import goodStoresImg from "../assets/images/target_market/goodstores.webp";
import farmerImg from "../assets/images/target_market/farmer.webp";

const images = [
  <img src={envPeopleImg} alt="Environmentally conscious people" />,
  <img src={ecologicalConsumerImg} alt="Ecological consumer" />,
  <img src={goodStoresImg} alt="Good stores" />,
  <img src={farmerImg} alt="Farmer" />,
];

const TarjetMarket = () => {
  return (
    <div className="target-market">
      <section>
        <h2>Target Market</h2>
        <p>
          Farmers looking for a natural, chemical-free way to cover and maintain the soil, and buyers of organic products.
        </p>
        <Carousel items={images} />
      </section>
    </div>
  );
};

export default TarjetMarket;