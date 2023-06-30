import React from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogOne = () => {
  return (
    <>
      {/*blog-area start*/}
      <div className="blog-area pd-top-100 pt-lg-0">
        <div className="container p-sm-0">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h4 className="subtitle">LATEST BLOG</h4>
                <h2 className="title">LATEST NEWS & ARTICLES</h2>
                <p className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quidem in dolore facilis modi architecto vero
                  reiciendis enim! Deleniti voluptatum incidunt quo mollitia
                  eius excepturi?
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/1.png" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="/blog">content-1</Link>
                  </h4>{" "}
                  <hr />
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
                  </ul> */}
                  <Link className="read-more-text" to="/blog">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/2.png" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="/blog">Content-2 </Link>
                  </h4>
                  <hr />
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
                  </ul> */}
                  <Link className="read-more-text" to="/blog">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/3.png" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="/blog">Content-3 </Link>
                  </h4>
                  <hr />
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
                  </ul> */}
                  <Link className="read-more-text" to="/blog">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*blog-area end*/}
    </>
  );
};

export default BlogOne;
