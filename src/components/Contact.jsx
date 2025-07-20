import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p><FaEnvelope /> email@example.com</p>
      <p><FaPhone /> +123 456 7890</p>

      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Contact;