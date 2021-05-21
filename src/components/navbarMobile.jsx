import React from 'react';
import logo from '../images/logo.png';
import '../style/index.css';
import '../style/global.css';

function navbarMobile() {
    return (
        <div className="navbar-group d-lg-none d-block">
            <nav class="navbar navbar-expand-lg rounded-pill container">
                <a class="navbar-brand rounded-circle d-flex" href="#">
                    <img src={logo} alt="logo" className="logo mr-auto"/>
                </a>
                <button class="navbar-toggler c-black b-black bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link c-black fs-18 fw-700 montserat-font" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link c-black fs-18 fw-700 montserat-font" href="#analisis">Analytics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link c-black fs-18 fw-700 montserat-font" href="#rate">Rate Card</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbarMobile;
