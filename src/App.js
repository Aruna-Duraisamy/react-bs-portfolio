import Particles from "./components/Particles";
import "./App.css";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="app">
      <Particles id="tsparticles" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className=" app_main">
              <main>
                <div className="px-3 py-2 text-white">
                  <div className="container" style={{ opacity: 1 }}>
                    <AboutMe />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
