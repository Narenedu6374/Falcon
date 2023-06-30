import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import { Link } from "react-router-dom";

const NavbarFive = React.lazy(() => import("../components/NavbarFive"));
const BreadcrumbTwo = React.lazy(() => import("../components/BreadcrumbTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BlogView = React.lazy(() => import("../components/BlogView"));

const SpecialProcess = () => {
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
          {/* <ServiceOneAll /> */}

          {/* Contact One */}
          {/* <div className="call-to-contact-area pd-top-140  mt-0">
            <ContactOne />
          </div> */}

          {/* Partner One */}
          <BlogView image="assets/img/specialprocess/special.jpg">
            <h2>
              <Link to="#">Special Process </Link>
            </h2>

            <p>
              Special process required for components manufactured at FALCON are
              performed by our NADCAP approved suppliers within radius 20 Miles.
            </p>
            <ul>
              <li>Heat Treatment </li>
              <li>EB Welding</li>
              <li>Vacuum Brazing</li>
              <li>Anodizing</li>
              <li>Passivation</li>
              <li>Chemical conversion</li>
              <li>Painting</li>
              <li>Powder coating</li>
              <li>Electro plating</li>
              <li>Electroless plating </li>
              <li>Dry film lubricant</li>
            </ul>
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

export default SpecialProcess;
