import React from 'react';
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import '../style/index.css';
import '../style/global.css';

function navbar() {
    return (
        <div className="navbar-group pt-3 container pt-md-0">
            <nav className="navbar navbar-expand-lg b-white rounded-pill container">
                <a className="navbar-brand mt-md-0 -mt-13 -ml-15 rounded-circle d-flex" href="#">
                    <img src={logo} alt="logo" className="logo mr-auto"/>
                </a>
                <button className="navbar-toggler mt-md-0 -mt-13" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <img src={menu} alt="logo" className="menu-icon c-white"/>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link c-black fs-18 fw-700 montserat-font" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link c-black fs-18 fw-700 montserat-font" href="#analisis">Analytics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link c-black fs-18 fw-700 montserat-font" href="#rate">Rate Card</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;
