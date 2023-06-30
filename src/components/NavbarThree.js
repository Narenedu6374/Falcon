import React, { useState } from "react";
import "./NavbarThree.css";

import { Link } from "react-router-dom";
const NavbarThree = () => {
  const [open, setOpen] = useState(false);

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* navbar start */}
      <header className="navbar-are">
        <nav
          className={
            "navbar navbar-area-1  navbar-area-3 navbar-area navbar-expand-lg"
          }
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target="#transpro_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/">
                <img src="assets/img/logo-2.png" alt="Transpro" />
              </Link>
            </div>
            <div className="nav-left-part"></div>

            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id="transpro_main_menu"
            >
              <ul className="navbar-nav menu-open">
                <li className="menu-item-has-children current-menu-item">
                  <Link to="#">Home</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/home-2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/home-3">Home 03</Link>
                    </li>
                    <li>
                      <Link to="/home-4">Home 04</Link>
                    </li>
                    <li>
                      <Link to="/home-5">Home 05</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Services</a>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <header>Design Services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Graphics</a>
                          </li>
                          <li>
                            <a href="#">Vectors</a>
                          </li>
                          <li>
                            <a href="#">Business cards</a>
                          </li>
                          <li>
                            <a href="#">Custom logo</a>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <header>Email Services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Personal Email</a>
                          </li>
                          <li>
                            <a href="#">Business Email</a>
                          </li>
                          <li>
                            <a href="#">Mobile Email</a>
                          </li>
                          <li>
                            <a href="#">Web Marketing</a>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <header>Security services</header>
                        <ul className="mega-links">
                          <li>
                            <a href="#">Site Seal</a>
                          </li>
                          <li>
                            <a href="#">VPS Hosting</a>
                          </li>
                          <li>
                            <a href="#">Privacy Seal</a>
                          </li>
                          <li>
                            <a href="#">Website design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <ul className='sub-menu'>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                    <li>
                      <Link to='/service-details'>Service Details Page</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/service">Service Page</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Service Details Page</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog Page</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarThree;
