import React from "react";
import { Link } from "react-router-dom";

const BlogViewTwo = ({ image }) => {
  return (
    <>
      {/* blog area start */}
      <div className="blog-area pd-top-120 pd-bottom-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="single-blog-inner style-2">
                <div className="thumb">
                  <img src={image} alt="Falcon" />
                </div>
                <div className="details">
                  {/* <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> By{" "}
                      <a className="ms-1" href="#">
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 01 July, 2022
                    </li>
                    <li>
                      <FaRegCommentDots /> Comments(3)
                    </li>
                    <li>
                      <FaTags /> Sea Transportation
                    </li>
                  </ul> */}
                  <h2>
                    <Link to="#">AERO SPACE</Link>
                  </h2>
                  <p>
                    We are specialize in manufacturing components for Aircraft
                    Engines and its accessories , actuations , interiors ,
                    Avionic and Landing gear systems.
                  </p>
                  <Link className="btn btn-base" to="/#">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </>
  );
};

export default BlogViewTwo;
