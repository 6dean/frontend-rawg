import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="header-style">
          <div>
            <Link to="/">
              <div className="logo">RAWG</div>
            </Link>
          </div>
          <div>
            <input
              type="search"
              className="search-header"
              placeholder="Search 831,779 games"
            ></input>
          </div>
          <div className="list-option-header">
            <Link to="/signin">
              <div className="options-header">JOIN US</div>
            </Link>
            <Link to="/login">
              <div className="options-header">LOGIN</div>
            </Link>
            <div className="options-header">FAVORITES</div>
            <div className="options-header">REVIEWS</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
