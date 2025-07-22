const Proposal = () => {
  return (
    <section className="propuesta">
      <h2>Our innovative proposal</h2>
      <p>
        How your product/service solves that problem in a unique or creative
        way.
      </p>
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
            <li>♻️ No plastic waste</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
