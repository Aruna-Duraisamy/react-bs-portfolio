import Particles from "./components/Particles";
import "./App.css";
import AboutMe from "./components/AboutMe";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Particles id="tsparticles" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <div className="app_main">
              <Navbar />
              <hr />
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
