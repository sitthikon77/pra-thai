import "./live.css";
import { FiPlay } from "react-icons/fi";

function Live() {
  return (
    <>
      <div className="live">
        <p>วิดีโอถ่ายทอดสด</p>

        <div className="container">
          <img src="./image/profile-pic/profile01.png" />

          <div className="top-left">
            <span>Live •</span>
          </div>

          <div className="centered">
            <button>
              <FiPlay />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="schedule">
          <p>ตารางเวลาการถ่ายทอดสอดวิดีโอ</p>
          <div className="d-flex" id="date-live">
            <h1>MON</h1>
            <h2>10.00-11.00</h2>
            <h3>19.00-20.00</h3>
          </div>

          <div className="d-flex" id="date-live">
            <h1>TUE</h1>
            <h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
            <h3>19.00-20.00</h3>
          </div>

          <div className="d-flex" id="date-live">
            <h1>WED</h1>
            <h2>10.00-11.00</h2>
            <h3>19.00-20.00</h3>
          </div>

          <div className="d-flex" id="date-live">
            <h1>THU&nbsp;</h1>
            <h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
            </h4>
            <h3>19.00-20.00</h3>
          </div>

          <div className="d-flex" id="date-live">
            <h1>FRI&nbsp;</h1>
            <h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
            <h3>19.00-20.00</h3>
          </div>

          <div className="d-flex" id="date-live">
            <h1>SAT&nbsp;&nbsp;</h1>
            <h2>10.00-11.00</h2>
            <h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
            </h4>
          </div>

          <div className="d-flex" id="date-live">
            <h1>SUN&nbsp;</h1>
            <h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
            </h4>
            <h3>19.00-20.00</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="line"></div>
      </div>
    </>
  );
}

export default Live;
