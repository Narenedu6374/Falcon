import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingOne = () => {
  return (
    <>
      {/* pricing area start */}
      <div className="pricing-area pd-top-115 pd-bottom-90">
        <div className="container">
          <h2 className="row justify-content-center">JOURNY</h2>
          {/* <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h5 className='subtitle'>PRICING PLAN</h5>
                <h2 className='title'>OUR FLEXIBLE PRICE</h2>
                <p className='content mt-2'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>KJL</h4>
                  {/* <div className="price">
                    <h2 className="d-inline-block">60</h2>
                    <sup>$</sup>
                    <span className="ps-2">/Per Month</span>
                  </div> */}
                </div>
                <div className="details">
                  <p>
                    Company established in 2007 to manufacture mechanical
                    components by using conventional machines for automotive
                    domain.
                  </p>
                  {/* <ul className="single-list-inner">
                    <li>
                      <FaCheckCircle />1 warehouse
                    </li>
                    <li>
                      <FaCheckCircle />
                      Custom business rules
                    </li>
                    <li>
                      <FaCheckCircle />
                      Real-time rate shopping
                    </li>
                    <li className="unavailable">
                      <FaCheckCircle />
                      100 freight shipments
                    </li>
                    <li className="unavailable">
                      <FaCheckCircle /> Any time 24/7 hour support
                    </li>
                  </ul> */}
                  {/* <a className="btn btn-base" href="#">
                    READ MORE
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>Bunny industries</h4>
                  {/* <div className="price">
                    <h2 className="d-inline-block">100</h2>
                    <sup>$</sup>
                    <span className="ps-2">/Per Month</span>
                  </div> */}
                </div>
                <div className="details">
                  <p>
                    Company established in 2016 to manufacture of high precision
                    products for aerospace, defence, automotive and others by
                    using CNC machine technology.
                  </p>
                  {/* <ul className="single-list-inner">
                    <li>
                      <FaCheckCircle />1 warehouse
                    </li>
                    <li>
                      <FaCheckCircle />
                      Custom business rules
                    </li>
                    <li>
                      <FaCheckCircle />
                      Real-time rate shopping
                    </li>
                    <li>
                      <FaCheckCircle />
                      100 freight shipments
                    </li>
                    <li className="unavailable">
                      <FaCheckCircle /> Any time 24/7 hour support
                    </li>
                  </ul> */}
                  {/* <a className="btn btn-base" href="#">
                    READ MORE
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>Falcon</h4>
                  {/* <div className="price">
                    <h2 className="d-inline-block">160</h2>
                    <sup>$</sup>
                    <span className="ps-2">/Per Month</span>
                  </div> */}
                </div>
                <div className="details">
                  <p>
                    Falcon Machining specializes in providing precision CNC
                    machining services, utilizing state-of-the-art technology.
                    One-Stop Shop for Precision Manufacturing and Assembly
                    Solutions for aerospace , automotive , medical and other
                    domains.
                  </p>
                  {/* <ul className="single-list-inner">
                    <li>
                      <FaCheckCircle />1 warehouse
                    </li>
                    <li>
                      <FaCheckCircle />
                      Custom business rules
                    </li>
                    <li>
                      <FaCheckCircle />
                      Real-time rate shopping
                    </li>
                    <li>
                      <FaCheckCircle />
                      100 freight shipments
                    </li>
                    <li>
                      <FaCheckCircle /> Any time 24/7 hour support
                    </li>
                  </ul>
                  <a className="btn btn-base" href="#">
                    CHOOSE PLAN
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing area end */}
    </>
  );
};

export default PricingOne;
