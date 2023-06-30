import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import TestimonialFour from "../components/TestimonialFour";
import { Link } from "react-router-dom";

const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const ServiceTwoAll = React.lazy(() => import("../components/ServiceTwoAll"));
const BlogView = React.lazy(() => import("../components/BlogView"));

const Medical = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarFive />

          {/* Breadcrumb */}
          <Breadcrumb title={"INDUSTRIES"} />

          <BlogView image="assets/img/medical/medical.jpg">
            <h2>
              <Link to="#">Medical</Link>
            </h2>

            <p>
              FALCON offers precision components which are heavily relied on in
              the medical industry, especially when it comes to patient health.
              Our products and services offer curative, preventative,
              rehabilitative and palliative care.
            </p>
            <Link className="btn btn-base" to="#">
              READ MORE
            </Link>
          </BlogView>
          {/* Service One All */}
          {/* <ServiceTwoAll /> */}

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}

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

export default Medical;
