import ImageCard from "./ImageCard";

const Mision = () => {
  return (
    <div className="mision">
      <ImageCard
        imageOnLeft={true}
        image="/src/assets/images/mision.webp"
        alt="Mission Image"
        title="Mision"
        text="To offer high-quality agricultural mulches that improve crop yield and promote sustainable agriculture."
      />
    </div>
  );
};

export default Mision;
