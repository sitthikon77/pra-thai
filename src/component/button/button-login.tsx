import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./button.css";

function ButtonLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="open-modal-login" variant="primary" onClick={handleShow}>
        เข้าสู่ระบบ
      </Button>

      <Modal show={show} onHide={handleClose} id="modal-body" className="mx-0">
        <div className="close-btn">
          <button onClick={handleClose}>X</button>
        </div>
        <Modal.Header className="justify-content-center" id="header">
          <Modal.Title>
            <div>
              <p>เข้าสู่ระบบ</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="label-phone">
          <label htmlFor="">เบอร์โทรศัพท์</label>
        </div>
        <div className="input-phone">
          <input placeholder="เบอร์โทรศัพท์" type="text"></input>
        </div>

        <div className="label-pass">
          <label htmlFor="">รหัสผ่าน</label>
        </div>
        <div className="input-pass">
          <input placeholder="รหัสผ่าน" type="password"></input>
        </div>

        <div className="btn-pass-forgot">
          <button>ลืมรหัสผ่าน</button>
        </div>

        <div className="btn-login">
          <button>เข้าสู่ระบบ</button>
        </div>

        <div className="text">
          <div></div>
          <p>หรือ</p>
          <div></div>
        </div>

        <div className="btn-login-fb">
          <button>เข้าสู่ระบบด้วย Facebook</button>
        </div>

        <div className="btn-login-g">
          <button>เข้าสู่ระบบด้วย Google</button>
        </div>

        <div className="btn-login-apple">
          <button>เข้าสู่ระบบด้วย Apple ID</button>
        </div>

        <div className="btn-register">
          <button>ลงทะเบียน</button>
        </div>
      </Modal>
    </>
  );
}

export default ButtonLogin;
