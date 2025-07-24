import HeroWithImage from "./HeroWithImage";
import image from "../assets/images/revenues.webp";

const RevenueStreams = () => {
  return (
    <div className="revenue-streams">
      <HeroWithImage
        title="Revenue Streams"
        description="Income will come from direct sales of quilts, subscription programs, online sales, and customized options, such as designs or colors."
        image={image}
      />
    </div>
  );
};

export default RevenueStreams;
