import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ children }) => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="#" className="navbar-item">Portfolio</a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <ul className="navbar-start">
                        <li className="navbar-item"><Link to="/">Home</Link></li>
                        <li className="navbar-item"><Link to="/jokes">Jokes</Link></li>
                    </ul>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="#" className="button is-primary"><strong>Sign up</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}

export default Menu;