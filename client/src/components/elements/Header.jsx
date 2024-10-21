import { Link } from 'react-router-dom';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>
            
            <header className="main-header">
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:example@gamil.com">example@gamil.com</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-location"></i>
                                </div>
                                <div className="text">
                                    <p>12 Green Road, 05 New York</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-right">
                            <div className="main-menu__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-xpa"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="https://static.wixstatic.com/media/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png/v1/fill/w_73,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png" alt=""/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-and-btn-box">
                                    <div className="main-menu__search-box">
                                        <Link href="#"
                                            className="main-menu__search search-toggler icon-search-interface-symbol"  onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <Link href="contact" className="main-menu__btn thm-btn">Get a quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="https://static.wixstatic.com/media/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png/v1/fill/w_73,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/128eb4_3ced2d249b1445e0975e433ba3bdfd10~mv2.png" alt=""/></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__search-and-btn-box">
                                <div className="main-menu__search-box">
                                    <Link href="#"
                                        className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="main-menu__btn thm-btn">Get a quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}