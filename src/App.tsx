import "./App.css";
import NavComponent from "./page/nav/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPraPage from "./page/list-pra-page/list-pra-page";
import HomePage from "./page/home-page/home-page";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Live from "./component/live/live";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col m-0 p-0">
              <NavComponent />
            </div>
            <div className="col-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list-pra-page" element={<ListPraPage />} />
              </Routes>
            </div>
            <div className="col">
              <Live />
            </div>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
