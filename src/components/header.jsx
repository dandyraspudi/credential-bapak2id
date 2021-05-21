import React from 'react';
import Navbar from './navbar';
import NavbarMobile from './navbarMobile';
import headerImage from '../images/header-content.png';
import headerImageMobile from '../images/image-mobile.png';
import '../style/index.css'
import '../style/global.css'

function header() {
    return (
        <div className="b-linear-blue header-main pt-500-0">
            <Navbar/>
            {/* <NavbarMobile/> */}

            <div className="row container m-auto">
                <div className="col-lg-6 col-12 mtb-100 header-content">
                    <h1 className="fs-96 fs-500-50 c-white fw-700 montserat-font">
                        Bapak2id <br/>
                        Credential
                    </h1>
                    <p className="fs-18 fs-500-16 fw-700 mtb-50 c-white montserat-font">
                        Maybe you’ve heard us on instagram, but now let’s find out more about bapak2Id as your business partner
                    </p>
                    <a href="#rate" className="fs-24 fs-500-18 c-black fw-700 b-yellow pt-3 pb-3 btn-cek-rate-header text-decoration-none prl-70 prl-500-20 montserat-font">
                        Cek our Rate Card
                    </a>
                </div>
                <div className="col-lg-6 col-12 pt-100 pt-900-30 d-flex justify-content-lg-end justify-content-center">
                    <img src={headerImage} alt="header image" className="header-image d-lg-block d-none"/>
                    <img src={headerImageMobile} alt="header image" className="header-image-mobile d-lg-none d-block mt-500-0150"/>
                </div>
            </div>
        </div>
    )
}

export default header;
