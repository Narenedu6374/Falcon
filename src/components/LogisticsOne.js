import React from "react";

import { Link } from "react-router-dom";
const LogisticsOne = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
              <div className="logistics-image" />
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  <span className="subtitles"></span>
                  <h2 className="title">About Us</h2>
                  <h5>
                    Falcon Machining provides full-services CNC machining and
                    sourcing of precision machined parts and assemblies.
                  </h5>
                  <p>
                    Falcon Machining specializes in providing precisioin CNC
                    machining services, utilizing state-of-the-art technology
                    and up to 5-axis machining capabilities. Since 2008,we have
                    provided innovative, diverse, cost-effective solutions or
                    our customer's complex machining and assembly chellange.
                    using out experience amd our advanced technologies, we
                    produce superior quality machined parts for all
                    industries and application.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Link to="/about" className="btn btn-base">
                  Read More
                </Link>
              </div>
              {/* <div className="counterup" id="counterup">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInLeft">
                        <div className="couter-icon">
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={4578} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Packages Delivered</h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInUp">
                        <div className="couter-icon">
                          <FaLayerGroup />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={5789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Repeat Customers</h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInRight">
                        <div className="couter-icon">
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={8789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Our Clients</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Logistics area  */}
    </>
  );
};

export default LogisticsOne;
