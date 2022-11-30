import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./Container";

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
  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
