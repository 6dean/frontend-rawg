import { Link } from "react-router-dom";

const Header = ({
  search,
  setSearch,
  setPlatform,
  token,
  tokenUser,
  transferToken,
  transferTokenUser,
}) => {
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
                  <div className="options-header">
                    <Link to="/yourprofile">
                      {tokenUser && tokenUser.toUpperCase()}
                    </Link>
                  </div>
                  <div
                    className="options-header-log"
                    onClick={() => {
                      transferToken(null);
                      transferTokenUser(null);
                    }}
                  >
                    LOG OUT
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <div className="options-header">JOIN US</div>
                  </Link>
                  <Link to="/login">
                    <div className="options-header">LOGIN</div>
                  </Link>
                </>
              )}
              <div className="options-header">FAVORITES</div>
              <div className="options-header">REVIEWS</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
