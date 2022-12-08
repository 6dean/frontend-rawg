import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// MES PAGES
import Home from "./Pages/Home";
import Platforms from "./Pages/Platforms";
import JoinUs from "./Pages/JoinUs";
import Login from "./Pages/Login";
import Favorites from "./Pages/Favorites";
import LastThirstyDays from "./Pages/LastThirstyDays";
import ThisWeek from "./Pages/ThisWeek";
import NextWeek from "./Pages/NextWeek";
import BestoftheYear from "./Pages/BestoftheYear";
import PopularTwentyOne from "./Pages/PopularTwentyOne";
import AllTimeTop from "./Pages/AllTimeTop";
import Stores from "./Pages/Stores";
import Genres from "./Pages/Genres";
import Developers from "./Pages/Developers";
import GameDetails from "./Pages/GameDetails.js";
import Listing from "./Pages/Listing";
import MemberPage from "./Pages/MemberPage.js";
import Wishlist from "./Pages/Wishlist";
import Reviews from "./Pages/Reviews";

// MES COMPONENTS
import Header from "./Components/Header";
import SideBanner from "./Components/SideBanner";

function Container() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [showLeft, setShowLeft] = useState(true);
  // const [autoSuggest, setAutosuggest] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/login") {
      setShowLeft(false);
    } else setShowLeft(true);
  }, [location.pathname]);

  // MES COOKIES

  const [token, setToken] = useState(Cookies.get("RAWG-TOKEN") || null);
  const [tokenUser, setTokenUser] = useState(Cookies.get("RAWG-USER") || null);

  const transferToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("RAWG-TOKEN", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("RAWG-TOKEN");
    }
  };

  const transferTokenUser = (tokenUser) => {
    if (tokenUser) {
      setTokenUser(tokenUser);
      Cookies.set("RAWG-USER", tokenUser, { expires: 7 });
    } else {
      setTokenUser(null);
      Cookies.remove("RAWG-USER");
    }
  };

  /**
   * ! AUTO SUGGEST SEARCH
   */
  // const suggestArray = (games) => {
  //   const suggest = [];
  //   suggest.push(games);
  //   setAutosuggest(suggest);
  // };

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        token={token}
        transferToken={transferToken}
        transferTokenUser={transferTokenUser}
        tokenUser={tokenUser}
      />
      <div style={{ display: "flex" }}>
        {showLeft ? (
          <SideBanner setPlatform={setPlatform} token={token} />
        ) : null}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                platform={platform}
                platformName={platformName}
                setPlatformName={setPlatformName}
              />
            }
          ></Route>
          <Route
            path="/game-details/:id"
            element={
              <GameDetails
                token={token}
                tokenUser={tokenUser}
                setPlatform={setPlatform}
                setPlatformName={setPlatformName}
              />
            }
          ></Route>
          <Route
            path="/platforms"
            element={
              <Platforms
                setPlatform={setPlatform}
                setPlatformName={setPlatformName}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <JoinUs
                transferToken={transferToken}
                transferTokenUser={transferTokenUser}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                transferToken={transferToken}
                transferTokenUser={transferTokenUser}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites token={token} />}
          ></Route>
          <Route path="/wishlist" element={<Wishlist token={token} />}></Route>
          <Route
            path="/last30days"
            element={<LastThirstyDays search={search} />}
          ></Route>
          <Route
            path="/thisweek"
            element={<ThisWeek search={search} />}
          ></Route>
          <Route
            path="/nextweek"
            element={<NextWeek search={search} />}
          ></Route>
          <Route
            path="/bestoftheyear"
            element={<BestoftheYear search={search} />}
          ></Route>
          <Route
            path="/popular2021"
            element={<PopularTwentyOne search={search} />}
          ></Route>
          <Route
            path="/alltimetop250"
            element={<AllTimeTop search={search} />}
          ></Route>
          <Route
            path="/platforms/:name"
            element={
              <Listing
                search={search}
                platform={platform}
                platformName={platformName}
                setPlatformName={setPlatformName}
              />
            }
          ></Route>
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/genres" element={<Genres />}></Route>
          <Route path="/developers" element={<Developers />}></Route>
          <Route
            path="/yourprofile"
            element={<MemberPage token={token} />}
          ></Route>
          <Route path="/reviews" element={<Reviews token={token} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Container;
