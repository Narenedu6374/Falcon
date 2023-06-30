import React from "react";

const LogisticsTwo = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area style-02 pt-5 pb-5">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
              <div className="logistics-image" />
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  <span className="subtitle">Title</span>
                  <h2 className="title">Sub-title-here</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit obcaecati consectetur iure fugiat voluptates numquam,
                    saepe laborum aspernatur ratione reiciendis voluptatum ut
                    quam nisi omnis blanditiis placeat eligendi debitis
                    doloribus. Vel, adipisci officiis! Repellendus reprehenderit
                    explicabo necessitatibus odio suscipit, dolorem laboriosam
                    magni nostrum, harum error distinctio esse, rerum maxime
                    sunt.
                  </p>
                </div>
              </div>
              {/* <div className='counterup' id='counterup'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInLeft'>
                        <div className='couter-icon'>
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={45789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Packages Delivered</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInUp'>
                        <div className='couter-icon'>
                          <FaLayerGroup />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31216} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Repeat Customers</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInRight'>
                        <div className='couter-icon'>
                          <FaRssSquare />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={21454} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Our Clients</h3>
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

export default LogisticsTwo;
