import "./styling/css/App.css";
import Biography from "./Components/Body/Biography";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="main_body">
          <NavBar></NavBar>
          <Biography></Biography>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
