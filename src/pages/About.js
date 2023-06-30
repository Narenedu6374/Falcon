import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import PricingOne from "../components/PricingOne";
import CounterOne from "../components/CounterOne";
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbThree = React.lazy(() =>
  import("../components/BreadcrumbThree")
);
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarFive />

          {/* Breadcrumb */}
          <BreadcrumbThree
            title={"ABOUT US"}
            image="url(assets/img/banner/breadcrumb-04.jpg)"
          />

          {/* About One */}
          <div className="pd-top-120 pd-bottom-120">
            <AboutOne />
          </div>

          <div className="fact-area" style={{ background: "#f9f9f9" }}>
            <CounterOne />
          </div>
          <PricingOne />

          {/* Skill One */}
          {/* <SkillOne /> */}

          {/* Video Area One */}
          {/* <VideoAreaOne /> */}

          {/* Testimonial Two */}
          {/* <TestimonialTwo /> */}

          {/* Partner One */}
          <PartnerOne />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
