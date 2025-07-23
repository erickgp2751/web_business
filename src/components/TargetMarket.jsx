import Card from './Card';
const TarjetMarket = () => {
  return (
    <div className="target-market">
      <section>
        
      </section>
      <h2>Target Market</h2>
      <p>Who is your ideal customer? Be specific.</p>
      <div className="target">
        <Card
              title="Environmentally conscious people"
              content=""
              src="/src/assets/images/systems.webp"
            />
        <Card
              title="Consumers of ecological products"
              content=""
              src="/src/assets/images/systems.webp"
            />
        <Card
              title="Decoration or home goods stores"
              content=""
              src="/src/assets/images/systems.webp"
            />
            <Card
              title="Farmers"
              content=""
              src="/src/assets/images/systems.webp"
            />  
      </div>
    </div>
  );
};

export default TarjetMarket;
