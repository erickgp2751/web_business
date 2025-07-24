import Grid from "./Grid";

const images = [
  {
    id: 1,
    src: "/src/assets/images/competition/mulching.webp",
    alt: "Competition 1",
  },
  {
    id: 2,
    src: "/src/assets/images/competition/mulchitoyo.webp",
    alt: "Competition 2",
  },
  {
    id: 3,
    src: "/src/assets/images//competition/popusa.webp",
    alt: "Competition 3",
  },
  {
    id: 4,
    src: "/src/assets/images/competition/simbiosis.webp",
    alt: "Competition 4",
  },
  { id: 5, src: "/src/assets/images/dogFarm.webp", alt: "Competition 5" },
];

const Competition = () => {
  return (
    <div className="competition">
      <h2>Competition</h2>
      <p>
        Some companies dedicated to selling all types of products for the
        agricultural sector are Grupo Industrial Popusa, Ecologia y Proteccion
        Agricola, and Plasticos Toyo. Unlike these companies, we offer better
        quality by not using polymers. We offer better crop protection by using
        eco-friendly fabrics that provide greater benefits.{" "}
      </p>
      <Grid images={images} />
    </div>
  );
};

export default Competition;
