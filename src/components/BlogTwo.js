import React from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogTwo = () => {
  return (
    <>
      {/*blog-area start*/}
      <div className="blog-area pd-top-115 pd-bottom-90">
        <div className="container p-sm-0">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">Assembly</h2>
                {/* <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam saepe totam consequuntur possimus laborum voluptas
                  dolore reprehenderit voluptate neque sed!
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/assembly/a4.jpg" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Helicoil Assembly</Link>
                  </h4>
                  <hr />
                  {/* <ul className='blog-meta'>
                    <li>
                      <FaUserAlt /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 01 July, 2022
                    </li>
                  </ul> */}

                  <Link className="read-more-text" to="#">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/assembly/a2.jpg" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Lee plug assembly</Link>
                  </h4>
                  <hr />
                  {/* <ul className='blog-meta'>
                    <li>
                      <FaUserAlt /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 01 July, 2022
                    </li>
                  </ul> */}

                  <Link className="read-more-text" to="#">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/assembly/a3.jpg" alt="Falcon" />
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Fluid adaptors assembly</Link>
                  </h4>

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
                  <hr />
                  <Link className=" read-more-text" to="#">
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

export default BlogTwo;
