import React from "react";
import "./Breadcrumb.css";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className="breadcrumb-area bg-overlay-2"
        style={{
          backgroundImage: 'url("assets/img/banner/breadcrumb-02.jpg")',
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
                to="/industries-overview"
                activeclassname="active"
                exact="true"
              >
                OverView
              </NavLink>
            </li>
            <li>
              <NavLink to="/aerospace" activeclassname="active">
                Aerospace
              </NavLink>
            </li>
            <li>
              <NavLink to="/oilandgas" activeclassname="active">
                Oil and Gas
              </NavLink>
            </li>
            <li>
              <NavLink to="/automobile" activeclassname="active">
                Automobile
              </NavLink>
            </li>
            <li>
              <NavLink to="/semiconductor" activeclassname="active">
                SemiConductor
              </NavLink>
            </li>
            <li>
              <NavLink to="/medical" activeclassname="active">
                Medical
              </NavLink>
            </li>
            <li>
              <NavLink to="/other" activeclassname="active">
                Other
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default Breadcrumb;
