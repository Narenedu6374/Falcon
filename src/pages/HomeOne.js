import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const LogisticsOne = React.lazy(() => import("../components/LogisticsOne"));
const TransportServiceArea = React.lazy(() =>
  import("../components/TransportServiceArea")
);
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarFive />

          {/* Banner One */}
          <BannerOne />

          {/* Feature One */}
          {/* <FeatureOne /> */}

          {/* About One */}
          <LogisticsOne />

          {/* Service One */}
          {/* <ServiceOne /> */}
          <TransportServiceArea />

          {/* Why Choose Us One */}
          {/* <WhyChooseUsOne /> */}

          {/* Counter One */}
          {/* 
          <CounterOne /> */}

          {/* Team One */}
          <PartnerOne />

          {/* Contact One */}
          {/* <div
            className="call-to-contact-area pd-top-240"
            style={{ background: "#F9F9F9" }}
          >
            <ContactOne />
          </div> */}

          {/* Testimonial One */}
          {/* <TestimonialOne /> */}

          {/* Portfolio One */}
          {/* <PortfolioOne /> */}

          {/* Blog One */}
          {/* <BlogOne /> */}

          {/* Partner One */}
          {/* <PartnerOne /> */}

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
