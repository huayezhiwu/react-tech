import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="nav">
        <Link to="/">Home</Link><br />
        <Link to="/detail">Detail</Link>
    </nav>
)

export default Header;