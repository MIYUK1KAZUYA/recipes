import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = function() {
    return (
        <nav className="navigation">
            <div>
                <Link to="/" className="link">Home</Link>
                <Link to="/favorites" className="link">Favorites</Link>
                <div className="dropdown">
                <p>Author's favorites</p>
                    <div className="dropdown-content">
                        <Link to="/recipe/4162" className="link">Macarons</Link>
                        <Link to="/recipe/1500" className="link">Burger</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
