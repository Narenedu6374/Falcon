import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import WhyChooseUsTwo from "../components/WhyChooseUsTwo";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const BlogView = React.lazy(() => import("../components/BlogView"));

const Testing = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarFive />

          {/* Breadcrumb */}
          <BreadcrumbTwo title={"Facilities"} />

          <WhyChooseUsTwo />

          {/* Service One All */}

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}

          {/* Partner One */}

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Testing;
