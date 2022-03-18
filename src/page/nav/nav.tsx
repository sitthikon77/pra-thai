import { Link } from "react-router-dom";
import "./nav.css";
import NavData from "../../data/navdata";

const NavComponent = () => {
  return (
    <div>
      <nav className="nav-menu">
        {NavData.map((nav, index) => {
          return (
            <li className="nav-text" key={index}>
              <Link to={nav.path}>
                <span className="nav-icon">{nav.icon}</span>
                <span>{nav.title}</span>
              </Link>
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default NavComponent;
