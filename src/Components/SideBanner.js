import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBanner = () => {
  return (
    <div className="side-banner">
      <div className="side-banner-style">
        <div className="side-section">
          <Link to="/">
            <div className="side-title">Home</div>
          </Link>
        </div>
        <div className="side-section">
          <div className="side-title">Reviews</div>
        </div>
        <div className="side-section">
          <div className="side-title">Username</div>
          <FontAwesomeIcon icon="fa-solid fa-gift" /> <p>Wishlist</p>
          <FontAwesomeIcon icon="fa-solid fa-heart-circle-check" />
          <p>Favorites</p>
          <FontAwesomeIcon icon="fa-solid fa-users" /> <p>People you follow</p>
        </div>

        <div className="side-section">
          <div className="side-title">New Releases</div>
          <p>Last 30 days</p>
          <div></div>
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

        <div className="side-section">
          <div className="side-title">Browse</div>
          <div className="nav">
            <Link to="/platforms">
              <div className="nav-icon">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-gamepad" />
                </p>
              </div>
              <div className="nav-icon">
                <p>Platforms</p>
              </div>
            </Link>
          </div>
          <p>stores</p>
          <p>Genres</p>
          <p>Developers</p>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
