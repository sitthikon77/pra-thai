import ChangeLanguage from "../button/button-change-language";
import ButtonLogin from "../button/button-login";
import Register from "../button/button-register";
import "./header.css";
import { Carousel } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="section">
        <div className="content">
          <img src="/image/logo/logo.png" alt="" />
          <p className="">Meta&nbsp;&nbsp;Prathai</p>
        </div>
      </div>

      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators " id="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./image/banner/banner01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./image/banner/banner02.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./image/banner/banner03.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Nav-header">
        <div className="header-logo">
          <img src="/image/logo/logo.png" alt="" />
          <p>Meta&nbsp;&nbsp;Prathai</p>
        </div>
        <div className="header-buntton">
          <div>
            <ButtonLogin />
          </div>
          <div>
            <Register />
          </div>

          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}

export default Header;
