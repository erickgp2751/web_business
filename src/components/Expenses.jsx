import Grid from "./Grid";
import acquisitionImg from "../assets/images/expenses/acqusition.webp"; // Nota: "acqusition" parece tener un typo (¿debería ser "acquisition"?)
import productionImg from "../assets/images/expenses/production.webp";
import marketingImg from "../assets/images/expenses/marketing.webp";
import distributionImg from "../assets/images/expenses/distribution.webp";
import webImg from "../assets/images/expenses/web.webp";

const images = [
  { 
    id: 1, 
    src: acquisitionImg, 
    alt: "High-quality materials acquisition",
    description: "Costos de adquisición de materiales orgánicos"
  },
  { 
    id: 2, 
    src: productionImg, 
    alt: "Production and assembly costs",
    description: "Costos de producción y ensamblaje"
  },
  { 
    id: 3, 
    src: marketingImg, 
    alt: "Marketing and advertising expenses",
    description: "Gastos de marketing y publicidad"
  },
  { 
    id: 4, 
    src: distributionImg, 
    alt: "Distribution and warehousing",
    description: "Logística y almacenamiento"
  },
  { 
    id: 5,
    src: webImg, 
    alt: "Online platform development",
    description: "Desarrollo de plataforma digital"
  }
];

const Expenses = () => {
  return (
    <div className="expenses-section">
      <h2>Expenses</h2>
      <p>
        The main activities that would generate costs would be: acquisition of high-quality materials (organic textiles, biodegradable filler), production and assembly, marketing and advertising, distribution and warehousing, administrative expenses, and online platform development costs.
      </p>
      <Grid images={images} />
    </div>
  );
};

export default Expenses;