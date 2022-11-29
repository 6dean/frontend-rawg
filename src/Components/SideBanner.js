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
          <div className="nav-icon">
            <p className="icon-class">
              <FontAwesomeIcon icon="fa-solid fa-gift" fontSize={18} />
            </p>
            <p>Wishlist</p>
          </div>
          <Link to="/favorites">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon
                  icon="fa-solid fa-heart-circle-check"
                  fontSize={18}
                />
              </p>
              <p>Favorites</p>
            </div>
          </Link>
          <div className="nav-icon">
            <p className="icon-class">
              <FontAwesomeIcon icon="fa-solid fa-users" fontSize={18} />
            </p>
            <p>People you follow</p>
          </div>
        </div>

        <div className="side-section">
          <div className="side-title">New Releases</div>
          <Link to="/last30days">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </p>
              <p>Last 30 days</p>
            </div>
          </Link>
          <Link to="/thisweek">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-fire" />
              </p>
              <p>This week</p>
            </div>
          </Link>
          <Link to="/nextweek">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-forward-fast" />
              </p>
              <p>Next week</p>
            </div>
          </Link>
          <div className="nav-icon">
            <p className="icon-class">
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
            </p>
            <p>Release calendar</p>
          </div>
        </div>

        <div className="side-section">
          <div className="side-title">Top</div>
          <Link to="/bestoftheyear">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-trophy" />
              </p>
              <p>Best of the year</p>
            </div>
          </Link>
          <Link to="/popular2021">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-ranking-star" />
              </p>
              <p>Popular in 2021</p>
            </div>
          </Link>
          <Link to="/alltimetop250">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-crown" />
              </p>
              <p>All time top 250</p>
            </div>
          </Link>
        </div>

        <div className="side-section">
          <div className="side-title">Browse</div>
          <Link to="/platforms">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-gamepad" fontSize={18} />
              </p>
              <p>Platforms</p>
            </div>
          </Link>
          <Link to="/stores">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-shop" />
              </p>
              <p>stores</p>
            </div>
          </Link>
          <div className="nav-icon">
            <p className="icon-class">
              <FontAwesomeIcon icon="fa-solid fa-ghost" />{" "}
            </p>
            <p>Genres</p>
          </div>
          <div className="nav-icon">
            <p className="icon-class">
              <FontAwesomeIcon icon="fa-solid fa-code" />
            </p>
            <p>Developers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
