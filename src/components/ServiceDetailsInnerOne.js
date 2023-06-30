import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const ServiceDetailsInnerOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="thumb">
                  <img src="assets/img/service/7.png" alt="Falcon" />
                  <div className="icon">
                    <img src="assets/img/icon1.png" alt="Falcon" />
                  </div>
                </div>
                <h2>Title here</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima magni earum exercitationem quam dolor unde
                  reprehenderit eligendi neque corporis magnam, ipsum cupiditate
                  aspernatur tempore minus. Aperiam ut beatae soluta, blanditiis
                  aliquid necessitatibus voluptatem consequuntur exercitationem
                  maiores iure ratione, similique non.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem, inventore consequuntur quidem omnis unde esse
                  veritatis delectus voluptas, amet repellat in soluta
                  accusantium sed quae magni eum tempora mollitia illum.
                </p>
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="thumb mb-lg-0 mb-4">
                      <img src="assets/img/service/8.png" alt="Falcon" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <h4 className="subtitle">sub-title here</h4>
                    <ul className="list-inner-wrap">
                      <li> Lorem, ipsum dolor</li>
                      <li> ipsum dolor sit amet Lorem</li>
                      <li>Magni distinctio doloremque illum harum .</li>
                      <li>obcaecati numquam facilis totam necessitatibus.</li>
                      <li> illum harum libero autem obcaecati </li>
                      <li> numquam facilis totam necessitatibus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                {/* <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Search here..." />
                    </div>
                    <button className="submit-btn" type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div> */}
                <div className="widget widget_catagory">
                  <h4 className="widget-title">
                    SERVICE
                    <span className="dot" />
                  </h4>
                  <ul className="catagory-items">
                    <li>
                      <Link to="/machining">
                        Machine{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/assembly">
                        Assembly{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/testing">
                        Testing{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/specialprocess">
                        SpecialProcess{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/semiconductor">
                        SemiConductor{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/other">
                        Other{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="widget widget_download">
                  <h4 className="widget-title">
                    DOWNLOAD BROCHURE
                    <span className="dot" />
                  </h4>
                  <ul className="download-items">
                    <li>
                      <a href="#">
                        {" "}
                        <FaRegFilePdf /> DOWNLOAD PDF
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <FaRegFileAlt /> DOWNLOAD DOC{" "}
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div
                  className="widget widget_support text-center mb-0"
                  style={{
                    background: "url(assets/img/widget/support-bg.png)",
                  }}
                >
                  <h4 className="widget-title style-white">
                    24/7 ONLINE SUPPORT <span className="dot" />
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, corporis harum. Omnis unde reiciendis est consequuntur
                    et veniam inventore expedita.
                  </p>
                  <p className="contact">
                    <FaRegEnvelope />
                    info@perennial.com
                  </p>
                  <p className="contact mb-0">
                    <FaPhoneAlt />
                    +91 1234567899
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="container">
                  <h4 className="subtitle mt-3">How It Works</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem laboriosam odio et nesciunt aliquid? Perferendis nobis
                    eos fuga facilis omnis pariatur odit deserunt distinctio in?
                    Tenetur qui quis modi esse.
                  </p>
                  <div className="video-thumb-wrap pt-1 pb-4">
                    <img src="assets/img/service/9.png" alt="Falcon" />
                    <span
                      className="video-play-btn cursor-pointer"
                      data-effect="mfp-zoom-in"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </span>
                  </div>
                  <p className="last-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates libero qui itaque veniam, id perferendis nostrum
                    repudiandae beatae sed quidem numquam inventore similique
                    odit accusamus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId=""
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ServiceDetailsInnerOne;
