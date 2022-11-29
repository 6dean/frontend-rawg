import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MES PAGES
import Home from "./Pages/Home";
import Platforms from "./Pages/Platforms";
import JoinUs from "./Pages/JoinUs";
import Login from "./Pages/Login";

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
} from "@fortawesome/free-solid-svg-icons";
library.add(faGamepad, faGift, faHeartCircleCheck, faUsers);

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
