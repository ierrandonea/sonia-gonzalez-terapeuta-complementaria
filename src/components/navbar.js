import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
            <Link className="navbar-brand font-vida ml-3" to="/">Sonia González Sierra</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Nav
                            className="nav-link"
                            to="home"
                            activeClass="selected"
                            spy={true}
                            smooth={true}
                            offset={100}
                            duration={2000}>Inicio</Nav>
                    </li>
                    <li className="nav-item">
                        <Nav
                            className="nav-link"
                            to="about"
                            activeClass="selected"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={2000}>Sobre Mí</Nav>
                    </li>
                    <li className="nav-item">
                        <Nav
                            className="nav-link"
                            to="services"
                            activeClass="selected"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={2000}>Terapias</Nav>
                    </li>
                    <li className="nav-item">
                        <Nav
                            className="nav-link"
                            to="testimonials"
                            activeClass="selected"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={2000}>Testimonios</Nav>
                    </li>
                    <li className="nav-item">
                        <Nav
                            className="nav-link"
                            to="contact"
                            activeClass="selected"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={2000}>Contacto</Nav>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;