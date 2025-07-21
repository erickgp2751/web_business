const EnvironmentalImpact = () => {
  return (
    <section className="environmental-impact-section">
      <h2>Environmental Impact</h2>
      <p>
        Globally, the use of plastic mulch generates a significant amount of
        waste. The Food and Agriculture Organization of the United Nations
        estimates that between 1.5 and 2 million tons of plastic are used in
        agriculture each year, primarily as mulch.
      </p>

      <table className="environmental-impact-table">
        <thead>
          <tr>
            <th></th>
            <th>Polyethylene/Polypropylene</th>
            <th>Biodagradable Mulching</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Biodegradability</th>
            <td>Non-biodegradable; remains in the environment for centuries.</td>
            <td>Completely biodegradable; decomposes in the soil within months.</td>
          </tr>

          <tr>
            <th>CO2 emissions in production</th>
            <td>High: energy-intensive process of fossil fuels.</td>
            <td>Low: uses natural materials and less energy-intensive processes.</td>
          </tr>

          <tr>
            <th>Microplastic contamination</th>
            <td>It generates microplastics that contaminate terrestrial and marine ecosystems.</td>
            <td>It does not generate microplastics; it decomposes completely without plastic waste.</td>
          </tr>

          <tr>
            <th>Recycling</th>
            <td>Recyclable, but the recycling rate is low and expensive.</td>
            <td>It does not require recycling, as it decomposes naturally.</td>
          </tr>

          <tr>
            <th>Impact on fauna</th>
            <td>Microplastics can be ingested by wildlife, affecting their health.</td>
            <td>It has no negative impact on wildlife; it integrates naturally into the soil.</td>
          </tr>

          <tr>
            <th>Durability</th>
            <td>It can last for years in the field.</td>
            <td>Less durable, decomposes according to the growing cycle.</td>
          </tr>

          <tr>
            <th>Effects on the soil</th>
            <td>It does not provide benefits to the soil, it can accumulate and affect its quality.</td>
            <td>It provides nutrients to the soil and improves its structure as it decomposes.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default EnvironmentalImpact;
