import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBanner = ({ setPlatform, token }) => {
  return (
    <div className="side-banner-resp">
      <div className="side-banner-style">
        <div className="side-section">
          <Link to="/">
            <div
              className="side-title"
              onClick={() => {
                setPlatform(null);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </div>
          </Link>
        </div>
        <div className="side-section">
          <Link to={token ? "/reviews" : "/signin"}>
            <div className="side-title">Reviews</div>
          </Link>
        </div>
        <div className="side-section">
          <Link to={token ? "/yourprofile" : "/signin"}>
            <div className="side-title">Your Page</div>
          </Link>
          <Link to="/wishlist">
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-gift" fontSize={18} />
              </p>
              <p>Wishlist</p>
            </div>
          </Link>
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
        </div>

        <div className="side-section">
          <div className="side-title">Top</div>
          <Link
            to="/bestoftheyear"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-trophy" />
              </p>
              <p>Best of the year</p>
            </div>
          </Link>
          <Link
            to="/popular2021"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-ranking-star" />
              </p>
              <p>Popular in 2021</p>
            </div>
          </Link>
          <Link
            to="/alltimetop250"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
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
          <Link
            to="/platforms"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-gamepad" fontSize={18} />
              </p>
              <p>Platforms</p>
            </div>
          </Link>
          <Link
            to="/stores"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-shop" />
              </p>
              <p>stores</p>
            </div>
          </Link>
          <Link
            to="/genres"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-ghost" />{" "}
              </p>
              <p>Genres</p>
            </div>
          </Link>
          <Link
            to="/developers"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="nav-icon">
              <p className="icon-class">
                <FontAwesomeIcon icon="fa-solid fa-code" />
              </p>
              <p>Developers</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
