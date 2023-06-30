import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import AeroSpace from "./pages/AeroSpace";
import OilAndGas from "./pages/OIlAndGas";
import Other from "./pages/Other";
import Medical from "./pages/Medical";
import SemiConductor from "./pages/SemiConductor";
import Automobile from "./pages/Automobile";
import Industries from "./pages/Industries";
import Facilities from "./pages/Facilities";
import Assembly from "./pages/Assembly";
import Testing from "./pages/Testing";
import SpecialProcess from "./pages/SpecialProcess";
import Enginnering from "./pages/Enginnering";
import Machining from "./pages/Machining";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomeOne />} />
        <Route exact path="/home-2" element={<HomeTwo />} />
        <Route exact path="/home-3" element={<HomeThree />} />
        <Route exact path="/home-4" element={<HomeFour />} />
        <Route exact path="/home-5" element={<HomeFive />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/industries-overview" element={<Industries />} />
        <Route exact path="/facilities-overview" element={<Facilities />} />
        <Route exact path="/aerospace" element={<AeroSpace />} />
        <Route exact path="/oilandgas" element={<OilAndGas />} />
        <Route exact path="/semiconductor" element={<SemiConductor />} />
        <Route exact path="/enginnering" element={<Enginnering />} />
        <Route exact path="/assembly" element={<Assembly />} />
        <Route exact path="/testing" element={<Testing />} />
        <Route exact path="/machining" element={<Machining />} />
        <Route exact path="/specialprocess" element={<SpecialProcess />} />
        <Route exact path="/medical" element={<Medical />} />
        <Route exact path="/other" element={<Other />} />
        <Route exact path="/automobile" element={<Automobile />} />
        <Route exact path="/service-details" element={<ServiceDetails />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
