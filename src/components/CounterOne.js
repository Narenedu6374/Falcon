import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const CounterOne = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className="container pb-100">
        <div
          className="fact-counter-area"
          style={{ background: "url(assets/img/fact/bg.png)" }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-fact-wrap">
                {/* <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={2000} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2> */}
                <h5>OUR MISSION</h5>
                <p>
                  Falcon Precision: To provide superior manufacturing services
                  to our customers and continue to innovate the machining
                  industry and beyond.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-fact-wrap">
                {/* <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter">
                          <CountUp delay={0} start={0} end={100} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2> */}
                <h5>OUR VISION </h5>
                <p>
                  A Global Leader in the design and manufacture of high
                  precision products for aerospace, defence , automotive and
                  others. To grow as a network of innovative businesses that
                  will focus on serving customer needs.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <div className="single-fact-wrap">
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter">
                          <CountUp delay={0} start={0} end={450} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>WORLDWIDE CLIENTS</h5>
                <p>Conveniently impact front-end niches via maintainable.</p>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <div className="single-fact-wrap after-none">
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter">
                          <CountUp delay={0} start={0} end={80} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>WORLD AWARDS</h5>
                <p>Conveniently impact front-end niches via maintainable.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterOne;
