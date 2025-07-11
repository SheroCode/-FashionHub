import React, { useState } from "react";
import { axiosInterceptors } from "../../Neworks/interceptors";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});

  const {id} = useParams();

  axiosInterceptors
    .get(`/product/${id}`)
    .then((res) => setProductDetails(res.data));

  return (
    <>
      <ProductCard product={productDetails} />
    </>
  );
}

export default ProductDetails;
