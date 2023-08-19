import ContentGrid from "../components/homepage/content-grid";
import HeroBannaer from "../components/homepage/main-banner";

function Homepage() {
  return (
    <>
      <div className="body">
        <HeroBannaer />
        <ContentGrid />
      </div>
    </>
  );
}

export default Homepage;
