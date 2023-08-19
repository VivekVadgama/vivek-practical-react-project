import SocialMedia from "../social-file";

function Footer() {
  return (
    <footer>
      <div className="tagline-swiper flex hide-tablet">
        <p>
          <strong>A BUSINESS PROUDLY RUN BY A TEAM OF</strong> DIVERSE WOMEN.
        </p>
        <p>
          <strong>A BUSINESS PROUDLY RUN BY A TEAM OF</strong> DIVERSE WOMEN.
        </p>
      </div>
      <div className="footer-nav show-tablet">
        <ul>
          <li>
            <a href="#">The why, how, what</a>
          </li>
          <li>
            <a href="#">Take your seat</a>
          </li>
          <li>
            <a href="#">Upcoming Discussions</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy & Cookies</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
