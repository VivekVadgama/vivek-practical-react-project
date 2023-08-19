import { LogoBlack } from "../../assets/icons/logo-black";
import SocialMedia from "../social-file";

function HeroBannaer() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col col-6 col-tab-12">
            <div className="left-block">
              <h1 className="heading">
                GIVING <br />
                <strong>
                  GLOBAL <br /> BRANDS
                </strong>
                <br /> A SEAT AT <br /> THE TABLE
              </h1>
              <div className="media-block hide-tablet">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="col col-6 col-tab-12">
            <div className="right-block">
              <div className="content-block">
                <h6>The</h6>
                <h2>
                  Spotlight <br /> Experience
                </h2>
                <span>
                  By <LogoBlack />
                </span>
                <div className="button-block flex justify-right">
                  <a className="button button-large" href="">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tagline-swiper flex show-tablet">
        <p>
          <strong>A BUSINESS PROUDLY RUN BY A TEAM OF</strong> DIVERSE WOMEN.
        </p>
        <p>
          <strong>A BUSINESS PROUDLY RUN BY A TEAM OF</strong> DIVERSE WOMEN.
        </p>
      </div>
    </section>
  );
}

export default HeroBannaer;
