import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialFour = ({ image }) => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
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
      {/* Start Testimonial area  */}
      <div className="testimonial-area-style-02">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-title  text-center">
                {/* <span className='subtitle'>Experience</span> */}
                <h2 className="title">MEDICAL</h2>
                <p>
                  FALCON offers precision components which are heavily relied on
                  in the medical industry, especially when it comes to patient
                  health. Our products and services offer curative,
                  preventative, rehabilitative and palliative care.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="img-gallery" style={{ margin: "0 28%" }}>
              <img src={image} alt="Falcon" width="600px" height="50%" />
            </div>
          </div>
          {/* <div className='row'>
            <div className='col-lg-12'>
              <div className='review-area'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='testimonial-slider-two'>
                      <Slider {...settings}>
                        <div className='single-review-item'>
                          <div className='inner'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review-item'>
                          <div className='inner'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/reviewer/02.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review-item'>
                          <div className='inner'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review-item'>
                          <div className='inner'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/reviewer/02.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review-item'>
                          <div className='inner'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* End Testimonial area  */}
    </>
  );
};

export default TestimonialFour;
