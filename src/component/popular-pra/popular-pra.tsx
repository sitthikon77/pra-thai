import "./popular-pra.css";
import { AiOutlineCaretDown } from "react-icons/ai";

function PopularPra() {
  return (
    <>
      <div className="container d-flex mt-2">
        <p className="search-menu-h">พระยอดนิยม</p>
      </div>

      <div className="container d-flex" id="popular-pra">
        <p>#พระบูชา</p>
      </div>
      <div className="container d-flex" id="popular-pra">
        <p>#เครื่องราง</p>
      </div>
      <div className="container d-flex" id="popular-pra">
        <p>#รูปหล่อ</p>
      </div>

      <div className="container btn-view-more">
        <button>
          ดูเพิ่มเติม
          <AiOutlineCaretDown />
        </button>
      </div>

      <div className="container">
        <div className="line-2"></div>
      </div>
    </>
  );
}

export default PopularPra;
