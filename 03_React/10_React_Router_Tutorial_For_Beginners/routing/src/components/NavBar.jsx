import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/" className="text-white">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="text-white">
                    <li>About</li>
                </Link>
                <Link to="/shop" className="text-white">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
