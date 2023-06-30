import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const BlogTwo = React.lazy(() => import("../components/BlogTwo"));
const FaqTwo = React.lazy(() => import("../components/FaqTwo"));

const Service = () => {
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
          <BlogTwo />
          <FaqTwo />
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

export default Service;
