import { BrowserRouter } from "react-router-dom";
import RouteView from "./router/routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./assets/style.css";
import ParticlesComponent from "./components/Particles";
import NavBarMobile from "./components/NabarMobile";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [viewMenu, setViewMenu] = useState(false);

  const changeViewMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <BrowserRouter>
      <NavBar viewMenu={viewMenu} changeViewMenu={changeViewMenu} />
      {viewMenu && (
        <header>
          <nav className="menu-mobile-container">
            <NavBarMobile setViewMenu={changeViewMenu} />
          </nav>
        </header>
      )}

      {!viewMenu && (
        <main className="router-view-container">
          <RouteView />
        </main>
      )}

      <Footer />
      <ParticlesComponent />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
