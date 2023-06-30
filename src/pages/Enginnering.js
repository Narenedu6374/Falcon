import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import { Link } from "react-router-dom";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const ServiceDetailsInnerOne = React.lazy(() =>
  import("../components/ServiceDetailsInnerOne")
);
const BlogView = React.lazy(() => import("../components/BlogView"));

const Enginnering = () => {
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

          {/* Partner One */}
          <BlogView image="assets/img/engine/enginnering.jpg">
            <h2>
              <Link to="#">Engineering </Link>
            </h2>

            <p>
              At FALCON , our team of experienced engineers develop innovative
              solutions using the latest 3D CAD/CAM systems (SolidWorks,
              AutoCAD, MasterCAM).
              <br />
              Our expertise in manufacturing includes mechanical,
              electro-mechanical, pneumatic and hydraulic systems and can
              support engineering projects from concept to production release.
              <br /> We’ll work closely with you to identify several engineering
              solutions that will help you complete your projects on time and
              within budget.
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

export default Enginnering;
