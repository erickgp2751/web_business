import Carousel from "./Carousel";
import magazineImg from "../assets/images/MarketingActivities/magazine.webp";
import socialMediaImg from "../assets/images/MarketingActivities/social-media.webp";
import eventPromotionImg from "../assets/images/MarketingActivities/event-promotion.webp";
import webPageImg from "../assets/images/MarketingActivities/web-page.webp";
import fairImg from "../assets/images/MarketingActivities/fair.webp";

const images = [
  <img src={magazineImg} alt="Magazine advertisement" />,
  <img src={socialMediaImg} alt="Social media marketing" />,
  <img src={eventPromotionImg} alt="Event promotion" />,
  <img src={webPageImg} alt="Web page promotion" />,
  <img src={fairImg} alt="Agricultural fair participation" />,
];

const MarketingActivities = () => {
  return (
    <div className="competition">
      <h2>Marketing Activities</h2>
      <p>
        We will advertise in magazines and websites related to agriculture and
        plant growing, use social media to share product information, hold
        promotions and events, and participate in agricultural fairs and events
        to showcase products and network with potential customers. In these
        ways, it will know more quickly that our product is ready-using.
      </p>

      <Carousel items={images} />
    </div>
  );
};

export default MarketingActivities;