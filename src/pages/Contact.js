import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BreadcrumbThree = React.lazy(() =>
  import("../components/BreadcrumbThree")
);

const Contact = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarFive />

          {/* Breadcrumb */}
          <BreadcrumbThree
            title={"CONTACT US"}
            image="url(assets/img/banner/breadcrumb-03.jpg)"
          />

          {/* Breadcrumb */}
          <ContactInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;
