import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

import BlogTwo from "../components/BlogTwo";
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const ServiceTwoAll = React.lazy(() => import("../components/ServiceTwoAll"));

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));

const Assembly = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarFive />

          {/* Breadcrumb */}
          <BreadcrumbTwo title={"Facilities"} />

          {/* Service One All */}
          <BlogTwo />

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

export default Assembly;
