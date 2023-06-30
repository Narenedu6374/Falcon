import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceTwoAll = () => {
  return (
    <>
      {/* service area start */}
      <div className="service-area style-2 pd-top-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h4 className="subtitle">Title</h4>
                <h2 className="title">Sub-title here</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat reiciendis ducimus quibusdam et esse quo nam est.
                  Dignissimos, ipsa reprehenderit!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/1.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="Perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat voluptatum libero vel cumque, vero delectus maiores
                    distinctio id recusandae harum?
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/2.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero praesentium voluptate iure laudantium reiciendis, cum
                    amet eos cumque recusandae tenetur?
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/3.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, obcaecati! Minima sunt voluptate dolorem eum
                    laudantium quaerat, quae asperiores aut.
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/4.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis harum laborum, molestiae laudantium rerum sequi maxime
                    blanditiis repellat totam tenetur?
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/5.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quae voluptate molestiae excepturi nemo nulla iste
                    incidunt similique dignissimos deserunt!
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="assets/img/service/6.png" alt="perennial" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="perennial" />
                  </div>
                </div>
                <div className="details">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium totam officiis quo unde error quod! Dolore
                    repellendus expedita veniam obcaecati.
                  </p>
                  <div className="btn-wrap">
                    <Link className="read-more-text" to="#">
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceTwoAll;
