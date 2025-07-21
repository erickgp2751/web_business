
const PresentationProduct = () => {
  return (
    <div className="presentation-container">
      <header>
        <h1>BioM mulching</h1>
        <p>It is a product, an agricultural mulching which serves as a protective fabric that is placed over the crop to protect it.</p>
        <p>our agricultural mulching is made from a starch blend that is biodegradable and does not need to be replaced, as it degrades and serves as compost.</p>
      </header>
      
      <section>
        <h2>Main features</h2>
        <ul>
            <li>Prevent the growth of grasses known as weeds</li>
            <li>It is made from a mixture of starch with vegetable fibers</li>
            <li>Completely biodegradable; decomposes in the soil within months.</li>
        </ul>
      </section>

      <section>
        <img src="/src/assets/images/mulch.webp" alt="Product" />
      </section>

      <button>know it now</button>
    </div>
  );
};

export default PresentationProduct;