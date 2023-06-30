import React from "react";
import {
  FaMoneyBillAlt,
  FaShieldAlt,
  FaToolbox,
  FaTruckMoving,
} from "react-icons/fa";

const FeatureTwo = () => {
  return (
    <>
      {/* Start Our Features area  */}
      <div
        className="features-area-2"
        style={{
          backgroundImage: 'url("assets/img/bg/feature-bg.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className='col-xl-6'>
              <div className='features-item'>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaMoneyBillAlt />
                  </div>
                  <h4>Transparent Pricing</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaToolbox />
                  </div>
                  <h4>Warehouse Storage</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaTruckMoving />
                  </div>
                  <h4>Real-Time Tracking</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaShieldAlt />
                  </div>
                  <h4>Security For Cargo</h4>
                </div>
              </div>
            </div> */}
            <div className="col-xl-12">
              <div className="section-title white  text-left m-auto">
                {/* <span className="subtitles">Our Features</span> */}
                <h2 className="title active">Other</h2>
                <p>
                  Falcon precision products are a leading full-service, "build
                  to print" source for all manufacturing needs. We work with
                  high-end clients across industries and a job with us allows
                  our employees to be on the cutting edge of the machining
                  industry. We follow strict protocols and provide a safe
                  working environment for all employees.
                </p>
                {/* <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="btn-bounce">
                    READ MORE
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Features area  */}
    </>
  );
};

export default FeatureTwo;
