import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/all";

const Footer = () => {
    return (
        <footer>
            <div className={"detail-col"}>
                <div className={"detail-row"}>
                    <p>Powered by MEG | ADG</p>
                </div>
                <div className={"detail-row"}>
                    <p className={"detail-col dh-logo"}>
                        <img src="images/DH.png" alt='DH-logo' width={300}/>
                    </p>
                    <div className={"detail-col"}>
                        <div className={"social-networks"}>
                            <FaFacebook size={20} className={"spacer"}/>
                            <FaTwitter size={20} className={"spacer"}/>
                            <FaInstagram size={20} className={"spacer"}/>
                            <FaWhatsapp size={20} className={"spacer"}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
