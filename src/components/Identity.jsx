import ImageCard from "./ImageCard";
const Identity = () => {
  return (
    <div className="identity">
      <ImageCard
      imageOnLeft={false} 
        image="/src/assets/images/qualityProduct.webp"
        alt="Identity Image"
        title="Identity"
        text="We anticipate our product being perceived as a reliable and cost-saving solution in the future."
      />
    </div>
  );
};

export default Identity;
