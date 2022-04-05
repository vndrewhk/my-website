import "./styling/css/App.css";
import Biography from "./Components/Body/Biography";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import About from "./Components/Body/About";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="main_body">
          <NavBar></NavBar>

          <Routes>
            <Route path="/" title = "Home |Andrew Ma" element={<Biography />}  />
            <Route path="/about*" title = "About |Andrew Ma"  element={<About />} />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
