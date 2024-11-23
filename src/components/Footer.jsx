import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-section about">
      <h3>ShopKart</h3>
      <p>Your one-stop destination for the latest and trending products. Quality guaranteed at the best prices.</p>
      <div class="social-icons">
        <a href="https://www.facebook.com" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://x.com" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/feed/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div class="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/product">Shop</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-section contact">
      <h4>Contact Us</h4>
      <p><i class="fas fa-map-marker-alt"></i> 1234 Market Street, City, Country</p>
      <p><i class="fas fa-phone-alt"></i> +91 234567890</p>
      <p><i class="fas fa-envelope"></i> support@shopkart.com</p>
    </div>
    <div class="footer-section newsletter">
      <h4>Subscribe to Our Newsletter</h4>
      <form action="#">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2024 ShopKart. All rights reserved.</p>
  </div>
</footer>

    </>
  );
};

export default Footer;
