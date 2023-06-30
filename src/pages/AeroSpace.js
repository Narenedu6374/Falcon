import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import { Link } from "react-router-dom";

const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));

const BlogView = React.lazy(() => import("../components/BlogView"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));

const AeroSpace = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

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

          {/* Partner One */}
          <BlogView image="assets/img/aerospace/aero2.jpg">
            <h2>
              <Link to="#">Aero Space</Link>
            </h2>

            <p>
              We are specialize in manufacturing components for Aircraft Engines
              and its accessories , actuations , interiors , Avionic and Landing
              gear systems.
            </p>
            <Link className="btn btn-base" to="#">
              READ MORE
            </Link>
          </BlogView>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default AeroSpace;
