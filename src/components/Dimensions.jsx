const Dimensions = () => {
  return (
    <section className="dimensions-section">
      <h2>Dimensions</h2>
      <p>
        For sale and to fulfill the purpose of agricultural mulch, the
        dimensions must be adapted to the most common types of crops and
        agricultural practices.
      </p>
      <table className="dimensions-table">
        <thead>
          <tr>
            <th></th>
            <th>Common Dimensions</th>
            <th>Applicable Dimensions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Width</th>
            <td>
              1 m, 1.2 m, and 1.5 m. Allows coverage of one or two rows of crops
              and is suitable for most plantations.
            </td>
            <td>1.2 m</td>
          </tr>
          <tr>
            <th>Length</th>
            <td>
              Between 10 and 50 m for small and medium-sized applications and up
              to 100 m or more for commercial use on large fields.
            </td>
            <td>50 m</td>
          </tr>
          <tr>
            <th>Thickness</th>
            <td>
              1 to 2 mm for short-season crops or moderate conditions, and 2 to
              3 mm for more demanding soils or areas with extreme climates,
              where mulch needs to be more durable
            </td>
            <td>From 1.5 to 2 mm</td>
          </tr>
        </tbody>
      </table>
      <p>
        These dimensions are optimal, ensuring that the width and thickness are
        sufficient to block sunlight and retain moisture in the root zone,
        ensuring the mulch lasts 3 to 6 months (enough for most crops and
        biodegrades without leaving plastic residue), meeting the needs of most
        growers, and simplifying adaptation to different crops.{" "}
      </p>
    </section>
  );
};

export default Dimensions;
