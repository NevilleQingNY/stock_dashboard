import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar header">
            <div className='navbar-header header-center'>
                <Link to="/" style={{ textDecoration: 'none' }}><h3 className='header-title'>Stock Market App</h3></Link>            
            </div>
        </div>
    )
}

export default Header;