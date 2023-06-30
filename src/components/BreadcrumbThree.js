import React from "react";
import "./Breadcrumb.css";
import { NavLink } from "react-router-dom";

const BreadcrumbThree = ({ title, image }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className="breadcrumb-area bg-overlay-2"
        style={{
          backgroundImage: image,
        }}
      >
        <div className="container" style={{ paddingBottom: "251px" }}>
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
        {/* <div className="menu_container">
          <ul>
            <li>
              <NavLink exact to="/facility-overview" activeClassName="active">
                OverView
              </NavLink>
            </li>
            <li>
              <NavLink to="/engineering" activeClassName="active">
                Engineering
              </NavLink>
            </li>
            <li>
              <NavLink to="/machining" activeClassName="active">
                Machining
              </NavLink>
            </li>
            <li>
              <NavLink to="/assembly" activeClassName="active">
                Assembly
              </NavLink>
            </li>
            <li>
              <NavLink to="/testing" activeClassName="active">
                Testing
              </NavLink>
            </li>
            <li>
              <NavLink to="/specialprocess" activeClassName="active">
                Special Process
              </NavLink>
            </li>
          </ul>
        </div> */}
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default BreadcrumbThree;
