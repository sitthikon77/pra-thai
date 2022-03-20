import "./search-menu.css";

function SearchMenu() {
  return (
    <>

      <div className="container d-flex">
        <p className="search-menu-h">ตามหาพระ</p>
      </div>
      <div className="container">
        <div className="row form-search">
          <div id="container-search">
            <select
              className="form-select"
              aria-label="Default select example"
              id="dropdown-select"
            >
              <option selected>เลือกจากประเภทพระ</option>
              <option value="1">พระบูชา</option>
              <option value="2">พระกรุ</option>
              <option value="3">พระรูปหล่อ</option>
              <option value="4">พระปิดตา</option>
              <option value="5">เหรียญหล่อ</option>
              <option value="6">พระกริ่ง พระชัย</option>
              <option value="7">พระอื่น</option>
            </select>
          </div>
          <div id="container-search">
            <input
              id="dropdown-select"
              className="form-control"
              type="text"
              placeholder="ชื่อพระเครื่อง / ร้านพระเครื่อง"
              aria-label="default input example"
            />
          </div>


          <div id="container-search-1">
            
            <input
              id="dropdown-select"
              className="form-control"
              type="number"
              placeholder="ราคา"
              aria-label="default input example"
            />
            
            <select
              className="form-select"
              aria-label="Default select example"
              id="dropdown-select"
            >
              <option selected>จังหวัด</option>
            </select>
            
          </div>
        
        <div className="container" id="container-search">
          <button className="btn-search">
            <p>ค้นหาพระ</p>
          </button>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="line-2"></div>
      </div>
    </>
  );
}

export default SearchMenu;
