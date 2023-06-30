import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const BlogOne = React.lazy(() => import("../components/BlogOne"));
const NavbarFive = React.lazy(() => import("../components/NavbarFive"));

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BreadcrumbThree = React.lazy(() =>
  import("../components/BreadcrumbThree")
);
const Blog = () => {
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
            title={"BLOG"}
            image="url(assets/img/banner/breadcrumb-04.jpg)"
          />

          {/* Blog View */}

          <BlogOne />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Blog;
