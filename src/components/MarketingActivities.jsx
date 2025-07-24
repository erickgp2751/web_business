import Carousel from "./Carousel";

const images = [
  <img
    src="/src/assets/images/MarketingActivities/magazine.webp"
    alt="Imagen 1"
  />,
  <img
    src="/src/assets/images/MarketingActivities/social-media.webp"
    alt="Imagen 2"
  />,
  <img
    src="/src/assets/images/MarketingActivities/event-promotion.webp"
    alt="Imagen 3"
  />,
  <img
    src="/src/assets/images/MarketingActivities/web-page.webp"
    alt="Imagen 4"
  />,
  <img src="/src/assets/images/MarketingActivities/fair.webp" alt="Imagen 5" />,
];

const MarketingActivities = () => {
  return (
    <div className="competition">
      <h2>Marketing Activities</h2>
      <p>
        We will advertise in magazines and websites related to agriculture and
        plant growing, use social media to share product information, hold
        promotions and events, and participate in agricultural fairs and events
        to showcase products and network with potential customers. In these
        ways, it will know more quickly that our product is ready-using.
      </p>

      <Carousel items={images} />
    </div>
  );
};

export default MarketingActivities;
