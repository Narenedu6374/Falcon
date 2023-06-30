import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import TeamOne from "../components/TeamOne";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BlogView = React.lazy(() => import("../components/BlogView"));

const Machining = () => {
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
          <TeamOne />

          {/* Contact One */}

          {/* Partner One */}
          {/* < /> */}

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Machining;
