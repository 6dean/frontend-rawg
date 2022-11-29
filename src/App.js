import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// MES COMPONENTS
import Header from "./Components/Header";
import SideBanner from "./Components/SideBanner";

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
  faCode
);

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBanner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/platforms" element={<Platforms />}></Route>
          <Route path="/signin" element={<JoinUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/last30days" element={<LastThirstyDays />}></Route>
          <Route path="/thisweek" element={<ThisWeek />}></Route>
          <Route path="/nextweek" element={<NextWeek />}></Route>
          <Route path="/bestoftheyear" element={<BestoftheYear />}></Route>
          <Route path="/popular2021" element={<PopularTwentyOne />}></Route>
          <Route path="/alltimetop250" element={<AllTimeTop />}></Route>
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/genres" element={<Genres />}></Route>
          <Route path="/developers" element={<Developers />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
