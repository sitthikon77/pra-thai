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
    </>
  );
}

export default Live;
