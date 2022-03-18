import { Link } from "react-router-dom"
import "./nav.css"
import NavData from "../../data/navdata"

const NavComponent =()=> {
    return(
        <div>
            <nav className="nav-menu">
                <ul className="nav-menu-item">
                    {NavData.map((nav,index)=>{
                        return(
                        <li className="nav-text" key={index}>
                            <Link to={nav.path}>{nav.icon}<span>{nav.title}</span></Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default NavComponent