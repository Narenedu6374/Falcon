import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarFive.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarFive = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <img src="assets/img/logo.png" alt="perennial" />
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <AiOutlineClose />
            </label>
            <li>
              <NavLink to="/" activeclassname="active" exact="true">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/service"
                className="desktop-item"
                activeclassname="active"
              >
                Services
              </NavLink>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Services
              </label>
              <ul className="drop-menu">
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/service-details">Service Details Page</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink
                to="/service"
                className="desktop-item"
                activeclassname="active"
              >
                Services
              </NavLink>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>
                      <NavLink to="/industries-overview">INDUSTRIES</NavLink>
                    </header>
                    <ul className="mega-links">
                      <li>
                        <NavLink to="/aerospace">Aerospace</NavLink>
                      </li>
                      <li>
                        <NavLink to="/oilandgas">Oil and Gas</NavLink>
                      </li>
                      <li>
                        <NavLink to="/automobile">Automobile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/semiconductor">SemiConductor</NavLink>
                      </li>
                      <li>
                        <NavLink to="/medical">Medical</NavLink>
                      </li>
                      <li>
                        <NavLink to="/other">Other</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>
                      <Link to="/facilities-overview"> FACILITIES </Link>
                    </header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/enginnering">Engineering</Link>
                      </li>
                      <li>
                        <Link to="/machining">Machining</Link>
                      </li>
                      <li>
                        <Link to="/assembly">Assemly</Link>
                      </li>
                      <li>
                        <Link to="/testing">Testing</Link>
                      </li>
                      <li>
                        <Link to="/specialprocess">Special process</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/blog" activeclassname="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <GiHamburgerMenu />
          </label>
        </div>
      </nav>
    </>
  );
};

export default NavbarFive;
