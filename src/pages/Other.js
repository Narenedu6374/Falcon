import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

import { Link } from "react-router-dom";

const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BlogView = React.lazy(() => import("../components/BlogView"));

const Other = () => {
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

          {/* Service One All */}
          {/* <ServiceOneAll /> */}

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}
          <BlogView image="assets/img/other/other.jpg">
            <h2>
              <Link to="#">Other</Link>
            </h2>

            <p>
              Falcon precision products are a leading full-service, "build to
              print" source for all manufacturing needs. We work with high-end
              clients across industries and a job with us allows our employees
              to be on the cutting edge of the machining industry. We follow
              strict protocols and provide a safe working environment for all
              employees.
            </p>
            <Link className="btn btn-base" to="#">
              READ MORE
            </Link>
          </BlogView>
          {/* Partner One */}
          {/* <PartnerOne /> */}
          {/* <TeamOne /> */}
          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Other;
