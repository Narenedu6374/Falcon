import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className="about-area pd-bottom-80">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-thumb-wrap">
                  <img
                    className="img-1"
                    src="./assets/img/about/shape.png"
                    alt="Falcon"
                  />
                  <img
                    className="img-2"
                    src="./assets/img/about/about1.jpg"
                    alt="Falcon"
                  />
                  <img
                    className="img-3"
                    src="./assets/img/about/about2.jpg"
                    alt="Falcon"
                  />
                  {/* <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='Falcon' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={22} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-inner-wrap">
                  <div className="section-title mb-0">
                    <h4 className="subtitle">ABOUT US</h4>
                    <h2 className="title">WELCOME WORLD WIDE BEST COMPANY</h2>
                    <p className="content left-line">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Modi maxime soluta laboriosam ipsa enim ullam voluptas
                      illo. Labore, eaque deserunt? Accusantium rerum quidem
                      omnis? Nulla esse quam eligendi, perferendis consequatur
                      quaerat. Sed aspernatur maiores tenetur, quia officia
                      consectetur beatae sint id ut distinctio itaque
                      praesentium pariatur, voluptates consequatur facilis
                    </p>
                    <div className="row">
                      {/* <div className="col-xl-6 col-lg-12 col-md-6">
                        <ul className="list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0">
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="Falcon"
                            />{" "}
                            S
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="Falcon"
                            />
                            Best Fitness Excercise
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="Falcon"
                            />
                            Combine Fitness and
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="Falcon"
                            />
                            Best Solutions
                          </li>
                        </ul>
                      </div> */}
                      {/* <div className="col-xl-6 col-lg-12 col-md-6 align-self-center">
                        <div className="thumb">
                          <img src="./assets/img/about/3.png" alt="Falcon" />
                        </div>
                      </div> */}
                    </div>
                    <div className="btn-wrap">
                      <Link className="btn btn-base" to="/about">
                        ABOUT MORE
                      </Link>
                      {/* <div className="author-wrap">
                        <div className="thumb">
                          <img src="./assets/img/about/4.png" alt="Falcon" />
                        </div>
                        <div className="details">
                          <img
                            src="./assets/img/about/signature.png"
                            alt="Falcon"
                          />
                          <p>CEO, Of Company</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
