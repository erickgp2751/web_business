const EnvironmentalImpact = () => {
  return (
    <section className="eco-impact">
      <h2>Environmental Impact</h2>
      
      <div className="eco-table-container">
        <table className="eco-comparison">
          <thead>
            <tr>
              <th className="eco-factor">Factor</th>
              <th className="eco-plastic">Plastic Mulch<br/>(Polyethylene)</th>
              <th className="eco-bio">Biodegradable Mulch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="eco-factor">Biodegradability</td>
              <td className="eco-negative">Non-biodegradable (lasts centuries)</td>
              <td className="eco-positive">Eco-friendly, decomposes in months</td>
            </tr>
            <tr>
              <td className="eco-factor">CO₂ Emissions</td>
              <td className="eco-negative">High (fossil fuel-intensive)</td>
              <td className="eco-positive">Low (uses natural materials)</td>
            </tr>
            <tr>
              <td className="eco-factor">Microplastics</td>
              <td className="eco-negative">Pollutes soil and water</td>
              <td className="eco-positive">Zero waste, safe for ecosystems</td>
            </tr>
            <tr>
              <td className="eco-factor">Soil Health</td>
              <td className="eco-negative">Degrades soil quality</td>
              <td className="eco-positive">Nutrient-rich, improves soil structure</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;