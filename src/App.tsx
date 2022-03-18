import "./App.css";
import ButtonLogin from "./component/button/button-login";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <ButtonLogin />
    </div>
  );
}

export default App;
