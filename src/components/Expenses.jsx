import Grid from "./Grid";

const images = [
  { id: 1, src: "/src/assets/images/expenses/acqusition.webp", alt: "Competition 1" },
  { id: 2, src: "/src/assets/images/expenses/production.webp", alt: "Competition 2" },
  { id: 3, src: "/src/assets/images/expenses/marketing.webp", alt: "Competition 3" },
  { id: 4, src: "/src/assets/images/expenses/distribution.webp", alt: "Competition 4" },
  { id: 4, src: "/src/assets/images/expenses/web.webp", alt: "Competition 5" }
];

const Expenses = () => {
  return (
    <div>
      <h2>Expenses</h2>
      <p> The main activities that would generate costs would be: acquisition of high-quality materials (organic textiles, biodegradable filler), production and assembly, marketing and advertising, distribution and warehousing, administrative expenses, and online platform development costs.</p>
      <Grid images={images} />
    </div>
    
  );
};

export default Expenses;
