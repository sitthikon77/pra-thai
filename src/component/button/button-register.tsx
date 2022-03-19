import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./button.css";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="open-modal-register" onClick={handleShow}>
        สมัครสมาชิก
      </Button>

      <Modal show={show} onHide={handleClose} id="modal-body" className="">
        <div className="close-btn">
          <button onClick={handleClose}>X</button>
        </div>
        <Modal.Header className="justify-content-center" id="header">
          <Modal.Title>
            <div>
              <p>สมัครสมาชิก</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="label-name">
          <label htmlFor="">ชื่อ - นามสกุล</label>
        </div>
        <div className="input-name">
          <input placeholder="ชื่อ - นามสกุล" type="text"></input>
        </div>

        <div className="label-phone">
          <label htmlFor="">เบอร์โทรศัพท์ (เพื่อใช้ในการเข้าสู่ระบบ)</label>
        </div>
        <div className="input-phone">
          <input placeholder="เบอร์โทรศัพท์" type="password"></input>
        </div>

        <div className="label-pass">
          <label htmlFor="">รหัสผ่าน (เพื่อใช้ในการเข้าสู่ระบบ)</label>
        </div>
        <div className="input-pass">
          <input placeholder="รหัสผ่าน" type="password"></input>
        </div>

        <div className="label-pass">
          <label htmlFor="">ยืนยันรหัสผ่าน</label>
        </div>
        <div className="input-pass">
          <input placeholder="ยืนยันรหัสผ่าน" type="password"></input>
        </div>

        <div className="btn-register-2">
          <button>สมัครสมาชิก</button>
        </div>
      </Modal>
    </>
  );
}

export default Register;
