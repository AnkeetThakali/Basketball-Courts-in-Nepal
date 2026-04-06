import { Link } from "react-router-dom";
import './navigation.css'

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="nav-items">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/basketball">Basketball</Link>
                <Link className="nav-link" to="/Futsal">Futsal</Link>
                <Link className="nav-link" to="/Tennis">Tennis</Link>
                <Link className="nav-link" to="/Swimming">Swimming</Link>
                <Link className="nav-link" to="/badminton">Badminton</Link>
            </div>
        </div>
    )
}
