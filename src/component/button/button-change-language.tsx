import { Dropdown, Button, DropdownButton } from "react-bootstrap";

function ChangeLanguage() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="TH">
        <Dropdown.Item id="dropdown-basic-item" href="#/action-1">
          TH
        </Dropdown.Item>
        <Dropdown.Item id="dropdown-basic-item" href="#/action-2">
          EN
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default ChangeLanguage;
