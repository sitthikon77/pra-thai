import "./App.css";
import NavComponent from "./page/nav/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPraPage from "./page/list-pra-page/list-pra-page";
import HomePage from "./page/home-page/home-page";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col m-0 p-0">
              <NavComponent />
            </div>
            <div className="col">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list-pra-page" element={<ListPraPage />} />
              </Routes>
            </div>
            <div className="col">One of three columns</div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
