import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TeamOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/*team-area start*/}
      <div className="team-area  pd-bottom-115 pd-top-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h4 className="subtitle">Machining</h4>
                {/* <h2 className="title">OUR PROFESSIONAL TEAM</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis pariatur nihil fugit officia recusandae aliquid
                  rerum cupiditate minus ex suscipit?
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="team-slider owl-carousel">
                <Slider {...settings}>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/3-axis.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>CNC milling centers 3 Axis</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/4-axis.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>CNC Milling Centers (4,5 Axis)</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img src="assets/img/machining/EMD.jpg" alt="Falcon" />
                      </div>
                      <div className="details">
                        <h5>EDM Wire cut</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/cnc turning.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>CNC turning</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/turn-mill.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>CNC Horizontal turnmill Center</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/polish.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>Polishing and Lapping machine</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-team-wrap">
                      <div className="thumb">
                        <img
                          src="assets/img/machining/id-od.jpg"
                          alt="Falcon"
                        />
                      </div>
                      <div className="details">
                        <h5>OD and ID grinding</h5>
                        {/* <p>Director &amp; CEO</p>
                        <div className='hover-icon'>
                          <FaPlus />
                          <ul className='social-area'>
                            <li>
                              <a href='#'>
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaWhatsapp />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*team-area end*/}
    </>
  );
};

export default TeamOne;
