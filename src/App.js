import "./styling/css/App.css";
import Biography from "./Components/Body/Biography/Biography";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import About from "./Components/Body/About/About";
import Headroom from "react-headroom";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="main_body">
          <div>
            <Headroom className="headroom">
              <NavBar></NavBar>
            </Headroom>
            <Routes>
              <Route path="/" element={<Biography />} />
              <Route path="/about/" element={<About />} />
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
