import React from 'react'
import '../style/index.css'
import ig from '../images/ig.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'

function footer() {
    return (
        <div className="b-black footer-bottom">
            <div className="row container m-auto d-flex align-items-center h-100 pt-3">
                <div className="col-md-6 col-12 text-center text-md-left order-2 order-md-1">
                    <p className="fs-14 c-white align-self-center montserat-font copy-content h-100">
                        Copyright © Bapak2id
                    </p>
                </div>
                <div className="col-md-6 col-12 soc-med order-1 order-md-2">
                    <ul className="d-flex soc-med list-unstyled justify-content-md-end justify-content-center h-100">
                        <li>
                            <a href="#" className="b-yellow soc-med-content rounded-circle d-flex justify-content-center align-items-center" target="_blank">
                                <img src={ig} alt="logo" className="socmed-logo mr-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="b-yellow soc-med-content rounded-circle d-flex justify-content-center align-items-center" target="_blank">
                                <img src={twitter} alt="logo" className="socmed-logo mr-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="b-yellow soc-med-content rounded-circle d-flex justify-content-center align-items-center" target="_blank">
                                <img src={youtube} alt="logo" className="socmed-logo mr-auto"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer
