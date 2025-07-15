import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Suspense } from "react";
import { TbTruckLoading } from "react-icons/tb";

function Layout() {
  return (
    <>
      {" "}
      <Navbar />
      <Suspense
        fallback={
          <h3 className='text-center'>
            {" "}
            <TbTruckLoading />
            Loading...
          </h3>
        }>
        <Outlet></Outlet>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
