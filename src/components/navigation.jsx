import { Link } from "react-router-dom";
import './navigation.css'

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="nav-items">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/basketball">Basketball</Link>
                <Link className="nav-link" to="/futsal">Futsal</Link>
                <Link className="nav-link" to="/badminton">Badminton</Link>
                <Link className="nav-link" to="/others">Others</Link>
            </div>
        </div>
    )
}
