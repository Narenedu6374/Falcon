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

const SemiConductor = () => {
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
          <BlogView image="assets/img/semiconductor/semi2.jpg">
            <h2>
              <Link to="#">SEMI CONDUCTOR</Link>
            </h2>

            <p>
              FALCON is one of the leading partners for major semiconductor
              equipment providers worldwide. Our expertise and assembly
              capabilities make us a cornerstone to the world’s leading
              technologies.
            </p>
            <Link className="btn btn-base" to="#">
              READ MORE
            </Link>
          </BlogView>

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

export default SemiConductor;
