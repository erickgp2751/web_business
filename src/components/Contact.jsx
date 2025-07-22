import { 
  FaEnvelope, 
  FaPhone, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-container">
        <div className="contact-info">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> 123 Main Street, City</p>
          <p><FaEnvelope /> email@example.com</p>
          <p><FaPhone /> +123 456 7890</p>
          <p><FaClock /> Monday-Friday: 9:00 - 18:00</p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#servicios">Services</a></li>
            <li><a href="#nosotros">About Us</a></li>
            <li><a href="#testimonios">Testimonials</a></li>
            <li><a href="#contacto">Contact Us</a></li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          
          <div className="newsletter">
            <h4>Subscribe to our newsletter</h4>
            <form>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Suscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BIOM MULCHING. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacidad">Privacy Policy</a>
          <a href="#terminos">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};