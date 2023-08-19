// import { Link } from "react-router-dom";
import SocialMedia from "../social-file";

function ContentGrid() {
  return (
    <div className="content-grid">
      <div className="container">
        <div className="row">
          <div className="col col-4 col-tab-12">
            <p>
              Grow your industry presence <br />
              <span>
                through meaningful <br /> networking.
              </span>
              {/* <Link to="#">demo</Link> */}
            </p>
          </div>
          <div className="col col-4 col-tab-12">
            <p>
              Harness
              <span>
                inspiring digital <br /> discussions
              </span>
              to drive reliable <br /> business growth.
            </p>
          </div>
          <div className="col col-4 col-tab-12">
            <p>
              Open the door to
              <span>
                genuine <br /> relationships
              </span>
              with C-Level <br /> executives and peers.
            </p>
          </div>
        </div>
        <div className="content-social-block show-tablet">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default ContentGrid;
