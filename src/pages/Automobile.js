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
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));

const Automobile = () => {
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

          {/* Service One All
          <ServiceOneAll />

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}

          {/* Partner One */}
          {/* <PartnerOne />  */}

          {/*blog-view */}
          <BlogView image="assets/img/automobile/auto2.jpg">
            <h2>
              <Link to="#">Auto Mobile</Link>
            </h2>

            <p>
              FALCON works diligently to fulfill the production and
              manufacturing needs of the dynamic and ever-changing automotive
              industry.
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

export default Automobile;
