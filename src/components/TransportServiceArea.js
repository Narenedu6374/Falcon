import React from "react";

const TransportServiceArea = () => {
  return (
    <>
      {/* Transport service area start */}
      <div
        className="transport-service-area"
        style={{ background: "url(assets/img/service/bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title  text-center">
                {/* <span className="subtitle">Our Services</span> */}
                <h2 className="title">FOR ALL YOUR MANUFACTURING NEEDS</h2>
                <p>
                  FALCON offers a dedicated enginnering staff, cutting edge
                  equipment and customer services that will assist your company
                  with all your manufacturing needs - from NPI to final assembly
                  in a controlled manufacturing environment.
                </p>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6">
              <div className="transport-service-image wow fadeInLeft">
                <img
                  src="assets/img/service/engineer.jpg"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <a href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex">
              <div className="transport-service-content wow fadeInRight">
                <h3 className="title">PROTOTYPING & ENGINNERING</h3>
                <p>
                  We are a full service source for your prototype and
                  enginnering needs. State-of-the-art equipment allows us ti
                  create high quailty products in record time.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="boxed-btn blank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6 offset-lg-1 order-lg-2">
              <div className="transport-service-image wow fadeInRight">
                <img
                  src="assets/img/service/machine_02.jpg"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <a href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex ">
              <div className="transport-service-content wow fadeInLeft">
                <h3 className="title">MACHINING</h3>
                <p>
                  We offer a wide variety of the latest machining capabilities
                  and services including 5-axis CNC and flexible manufacturing
                  centers.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="boxed-btn blank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6">
              <div className="transport-service-image wow fadeInLeft">
                <img
                  src="assets/img/service/machine.jpeg"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <a href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex">
              <div className="transport-service-content wow fadeInRight">
                <h3 className="title">ASSEMBLY</h3>
                <p>
                  Our integrated services provide customers with manufacturing
                  and assembly solutions that allow us to design , build, and
                  ship a complete packaged products to our customers.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="boxed-btn blank">
                    Contact for transport
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6 offset-lg-1 order-lg-2">
              <div className="transport-service-image wow fadeInRight">
                <img
                  src="assets/img/home/testing-home.jpg"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <a href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex ">
              <div className="transport-service-content wow fadeInLeft">
                <h3 className="title">SPECIAL TOLLINGS & TESTING EQUIPMENTS</h3>
                <p>
                  FALCON has been the leading manufacturer of high precision
                  tooling equipment’s such as Fixtures, Gauges, SPM, Pressure
                  Testing, leakage testing machines etc
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="boxed-btn blank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2">
              <div className="btn-wrapper animated fadeInUpBig text-center">
                <a href="#" className="boxed-btn btn-bounce">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Transport service area end */}
    </>
  );
};

export default TransportServiceArea;
