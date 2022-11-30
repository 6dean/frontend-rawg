import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

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

// MES COMPONENTS
import Header from "./Components/Header";
import SideBanner from "./Components/SideBanner";
import NoBanner from "./Components/NoBanner";

// MES ICONES
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGamepad,
  faGift,
  faHeartCircleCheck,
  faUsers,
  faStar,
  faFire,
  faForwardFast,
  faCalendarDays,
  faTrophy,
  faRankingStar,
  faCrown,
  faShop,
  faGhost,
  faCode,
  faHeart,
  faKeyboard,
  faBookmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faGamepad,
  faGift,
  faHeartCircleCheck,
  faUsers,
  faStar,
  faFire,
  faForwardFast,
  faCalendarDays,
  faTrophy,
  faRankingStar,
  faCrown,
  faShop,
  faGhost,
  faCode,
  faHeart,
  faKeyboard,
  faBookmark,
  faMagnifyingGlass
);

function App() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [showLeft, setShowLeft] = useState(true);

  return (
    <Router>
      <Header search={search} setSearch={setSearch} setPlatform={setPlatform} />
      <div style={{ display: "flex" }}>
        {/* {HideSideBanner} */}
        {showLeft ? <SideBanner /> : null}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                platform={platform}
                platformName={platformName}
                setPlatformName={setPlatformName}
                setShowLeft={setShowLeft}
              />
            }
          ></Route>
          <Route path="/game-details/:id" element={<GameDetails />}></Route>
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
            element={<JoinUs setShowLeft={setShowLeft} />}
          ></Route>
          <Route
            path="/login"
            element={<Login setShowLeft={setShowLeft} />}
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
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
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/genres" element={<Genres />}></Route>
          <Route path="/developers" element={<Developers />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
