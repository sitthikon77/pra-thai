import "./App.css";
import NavComponent from "./page/nav/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPraPage from "./page/list-pra-page/list-pra-page";
import HomePage from "./page/home-page/home-page";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Live from "./component/live/live";
import "./App.css";
import CertificatePage from "./page/cerificate-page/certificate-page";
import NewsPage from "./page/news-page/news-page";
import ContractPage from "./page/contract-page/contract-page";
import PolicyPage from "./page/policy-page/policy-page";
import SearchMenu from "./component/search-menu/search-menu";
import LikeShop from "./component/like-shop/like-shop";
import PopularPra from "./component/popular-pra/popular-pra";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col col-3 m-0 p-0">
              <NavComponent />
            </div>
            <div className="col col-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list-pra-page" element={<ListPraPage />} />
                <Route path="/certificate-page" element={<CertificatePage />} />
                <Route path="/news-page" element={<NewsPage />} />
                <Route path="/contract-page" element={<ContractPage />} />
                <Route path="/policy-page" element={<PolicyPage />} />
              </Routes>
            </div>
            <div className="col col-3">
              <Live />
              <SearchMenu />
              <LikeShop />
              <PopularPra />
            </div>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
