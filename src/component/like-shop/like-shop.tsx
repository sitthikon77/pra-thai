import "./like-shop.css";
import { AiOutlineCaretDown } from "react-icons/ai";

function LikeShop() {
  return (
    <>
      <div className="container d-flex mt-2">
        <p className="search-menu-h">ร้านค้าที่คุณอาจถูกใจ</p>
      </div>

      <div className="container d-flex" id="like-shop">
        <div>
          <img src="./image/follow/Group-228.png" alt="" />
        </div>
        <div className="like-shop-text">
          <h1 className="mb-0">บอย ท่าพระจันทร์ FC</h1>
          <p>@boythaphrachan</p>
        </div>
        <div>
          <button>ติดตาม</button>
        </div>
      </div>

      <div className="container d-flex" id="like-shop">
        <div>
          <img src="./image/follow/Group-231.png" alt="" />
        </div>
        <div className="like-shop-text">
          <h1 className="mb-0">ร้านพระเครื่องนพเกล้า</h1>
          <p>@boythaphrachan</p>
        </div>
        <div>
          <button>ติดตาม</button>
        </div>
      </div>

      <div className="container d-flex" id="like-shop">
        <div>
          <img src="./image/follow/Group-243.png" alt="" />
        </div>
        <div className="like-shop-text">
          <h1 className="mb-0">พระเครื่องเรื่องสนุก</h1>
          <p>@boythaphrachan</p>
        </div>
        <div className="mx-1">
          <button>ติดตาม</button>
        </div>
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

export default LikeShop;
