import Grid from "./Grid";
import mulchingImg from "../assets/images/competition/mulching.webp";
import mulchitoyoImg from "../assets/images/competition/mulchitoyo.webp";
import popusaImg from "../assets/images/competition/popusa.webp";
import simbiosisImg from "../assets/images/competition/simbiosis.webp";
import dogFarmImg from "../assets/images/dogFarm.webp"; // Nota: Corregí "competition" (había un typo en tu ruta original)

const images = [
  {
    id: 1,
    src: mulchingImg,
    alt: "Mulching product competition",
    description: "Traditional mulching products"
  },
  {
    id: 2,
    src: mulchitoyoImg,
    alt: "Mulchitoyo competition product",
    description: "Mulchitoyo brand alternative"
  },
  {
    id: 3,
    src: popusaImg,
    alt: "Popusa agricultural products",
    description: "Grupo Industrial Popusa offerings"
  },
  {
    id: 4,
    src: simbiosisImg,
    alt: "Simbiosis eco products",
    description: "Ecologia y Proteccion Agricola"
  },
  {
    id: 5,
    src: dogFarmImg,
    alt: "Dog Farm agricultural solutions",
    description: "Alternative farm protection"
  },
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
        eco-friendly fabrics that provide greater benefits.
      </p>
      <Grid images={images} />
    </div>
  );
};

export default Competition;