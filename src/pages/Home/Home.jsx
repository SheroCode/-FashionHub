import { lazy, Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import "./Home.css";
import { CgEnter } from "react-icons/cg";
import { TbTruckLoading } from "react-icons/tb";
const ProductList = lazy(() =>
  import("../../components/ProductList/ProductList")
);
function Home() {
  return (
    <>
      <Banner />

      <Suspense
        fallback={
          <h3 className='text-center'>
            {" "}
            <TbTruckLoading />
            Loading...
          </h3>
        }>
        {" "}
        <ProductList />
      </Suspense>
    </>
  );
}

export default Home;
