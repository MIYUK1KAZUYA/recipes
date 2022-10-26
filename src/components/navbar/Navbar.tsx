import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = function() {
    return (
        <nav className="navigation">
            <div>
                <Link to="/" className="link">Home</Link>
                <Link to="/favorites" className="link">Favorites</Link>
                <Link to="/detail" className="link">Author's favorites</Link>
            </div>
        </nav>
    );
};

export default Navbar;
