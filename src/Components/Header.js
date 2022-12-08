import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SideBanner from "./SideBannerResponsive";

const Header = ({
  search,
  setSearch,
  setPlatform,
  token,
  tokenUser,
  transferToken,
  transferTokenUser,
}) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1349) {
      setDisplayMenu(false);
    }
  }, []);

  return (
    <header>
      <div className="top-header">
        <div className="header-style">
          <div className="flex1">
            <Link
              to="/"
              onClick={() => {
                setPlatform(null);
              }}
            >
              <div className="logo">RAWG</div>
            </Link>

            <div
              className="menu-icon-header"
              onClick={() => {
                displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} fontSize={30} color="white" />
            </div>
          </div>
          <div className="flex2">
            <input
              type="search"
              className="search-header"
              placeholder="🔍 Search 831,779 games"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              value={search}
            ></input>
          </div>
          <div className="flex1-bis">
            <div className="list-option-header">
              {token ? (
                <>
                  <div className="options-header-user">
                    <Link to="/yourprofile">
                      {tokenUser && tokenUser.toUpperCase()}
                    </Link>
                  </div>
                  <Link to="/favorites">
                    <div className="options-header">FAVORITES</div>
                  </Link>
                  <Link to="/reviews">
                    <div className="options-header">REVIEWS</div>
                  </Link>
                  <Link to="/">
                    <div
                      className="options-header-log"
                      onClick={() => {
                        transferToken(null);
                        transferTokenUser(null);
                      }}
                    >
                      LOG OUT
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <div className="options-header">JOIN US</div>
                  </Link>
                  <Link to="/login">
                    <div className="options-header">LOGIN</div>
                  </Link>
                  <Link to="/favorites">
                    <div className="options-header">FAVORITES</div>
                  </Link>
                  <Link to="/reviews">
                    <div className="options-header">REVIEWS</div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>{displayMenu && <SideBanner />}</div>
    </header>
  );
};

export default Header;
