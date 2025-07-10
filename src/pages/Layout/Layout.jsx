import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      {" "}
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
