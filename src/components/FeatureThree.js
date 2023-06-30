import React from "react";
import { FaBox, FaMoneyBillAlt, FaShieldAlt, FaTruck } from "react-icons/fa";

const FeatureThree = ({ image }) => {
  return (
    <>
      {/* Start Our Features area  */}
      <div className="features-area style-02">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-12 pb-3">
              <div className="section-title white  text-left m-auto">
                {/* <span className='subtitles'>Our Features</span> */}
                <h2 className="title active">AUTO MOBILE</h2>
                <p className="des">
                  FALCON works diligently to fulfill the production and
                  manufacturing needs of the dynamic and ever-changing
                  automotive industry.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                  <a href="#" className="boxed-btn btn-bounce mt-3">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="features-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-features-item">
                      <div className="icon">
                        <FaMoneyBillAlt />
                      </div>
                      <h4>Transparent Pricing</h4>
                    </div>
                    <div className="single-features-item">
                      <div className="icon">
                        <FaTruck />
                      </div>
                      <h4>Warehouse Storage</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 mg-top-60">
                    <div className="single-features-item">
                      <div className="icon">
                        <FaBox />
                      </div>
                      <h4> Real-Time Tracking</h4>
                    </div>
                    <div className="single-features-item">
                      <div className="icon">
                        <FaShieldAlt />
                      </div>
                      <h4> Security For Cargo</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* End Our Features area  */}
    </>
  );
};

export default FeatureThree;
