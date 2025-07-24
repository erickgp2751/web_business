import image from "../assets/images/model.webp";
const Proposal = () => {
  return (
    <section className="propuesta">
      <h2>Our innovative solution</h2>
      <p> Our solution is to replace pollution with our  high-quality agricultural mulching, made from sustainable and biodegradable materials, user-friendly to support the reduction of plastic use by supporting farmers with their crops and even serving as compost. </p>
      <div className="comparation">
        <div className="container traditional">
          <h3>Traditional Mulching</h3>
          <ul>
            <li>☠️ Not biodegradable</li>
            <li>⚠️ Leaves plastic waste</li>
            <li>📉 It can damage the soil in the long term.</li>
          </ul>
        </div>
        <div className="container biodegradable">
          <h3> Biodegradable Mulching</h3>
          <ul>
            <li>✅ 100% biodegradable</li>
            <li>🌱 Improves soil structure</li>
            <li>♻️ Eco-friendly, no plastic waste</li>
          </ul>
        </div>
      </div>
      <img className="model-image" src={image}></img>
    </section>
  );
};

export default Proposal;
