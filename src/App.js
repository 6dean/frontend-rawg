import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MES PAGES
import Home from "./Pages/home";
import Platforms from "./Pages/platforms";
import JoinUs from "./Pages/joinus";
import Login from "./Pages/login";

// MES COMPONENTS
import Header from "./Components/Header";
// import SideBanner from "./Components/SideBanner";

function App() {
  return (
    <Router>
      <Header />
      {/* <SideBanner /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/platforms" element={<Platforms />}></Route>
        <Route path="/signin" element={<JoinUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
