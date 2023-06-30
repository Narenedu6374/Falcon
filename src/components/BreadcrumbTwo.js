import React from "react";
import "./Breadcrumb.css";
import { NavLink } from "react-router-dom";

const BreadcrumbTwo = ({ title }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className="breadcrumb-area bg-overlay-2"
        style={{
          backgroundImage: 'url("assets/img/banner/breadcrumb-1.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-inner">
                <div className="section-title mb-0">
                  <h2 className="page-title">{title}</h2>
                  <ul className="page-list">
                    <li>
                      <NavLink to="/">HOME</NavLink>
                    </li>
                    /<li className="ps-0">{title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu_container">
          <ul>
            <li>
              <NavLink
                to="/facilities-overview"
                activeclassname="active"
                exact="true"
              >
                OverView
              </NavLink>
            </li>
            <li>
              <NavLink to="/enginnering" activeclassname="active">
                Enginnering
              </NavLink>
            </li>
            <li>
              <NavLink to="/machining" activeclassname="active">
                Machining
              </NavLink>
            </li>
            <li>
              <NavLink to="/assembly" activeclassname="active">
                Assembly
              </NavLink>
            </li>
            <li>
              <NavLink to="/testing" activeclassname="active">
                Testing
              </NavLink>
            </li>
            <li>
              <NavLink to="/specialprocess" activeclassname="active">
                Special Process
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default BreadcrumbTwo;
