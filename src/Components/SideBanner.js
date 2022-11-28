// import { Link } from "react-router-dom";

const SideBanner = () => {
  return (
    <div className="side-banner">
      <div className="side-banner-style">
        <div className="side-section">
          <div className="side-title">Home</div>
        </div>
        <div className="side-section">
          <div className="side-title">Reviews</div>
        </div>
        <div className="side-section">
          <div className="side-title">Username</div>
          <p>Wishlist</p>
          <p>My library</p>
          <p>People you follow</p>
        </div>

        <div className="side-section">
          <div className="side-title">New Releases</div>
          <p>Last 30 days</p>
          <p>This week</p>
          <p>Next week</p>
          <p>Release calendar</p>
        </div>

        <div className="side-section">
          <div className="side-title">Top</div>
          <p>Best of the year</p>
          <p>Popular in 2021</p>
          <p>All time top 250</p>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
