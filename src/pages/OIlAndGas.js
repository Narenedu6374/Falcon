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

const OilAndGas = () => {
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
          <BlogView image="assets/img/gas/oil2.jpg">
            <h2>
              <Link to="#">Oil and Gas</Link>
            </h2>

            <p>
              Oil and gas industry is in need of more manufacturing processes
              than ever and Falcon is proud to work with clients to deliver
              quality precision parts.
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

export default OilAndGas;
