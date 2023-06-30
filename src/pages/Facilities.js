import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const ServiceTwoAll = React.lazy(() => import("../components/ServiceTwoAll"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));

const Facilities = () => {
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

          {/* Service One All */}
          <ServiceTwoAll />

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}
          {/* <TeamOne /> */}
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

export default Facilities;
