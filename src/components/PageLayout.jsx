import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Nested routes render out here */}
      <Footer />
    </>
  );
};

export default PageLayout;
