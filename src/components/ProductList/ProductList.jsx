import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
function ProductList() {
  const [products, setProduct] = useState([]);
  function handleShortList(productName) {
    alert(productName);
  }
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      console.log(res.data.products);
      return setProduct(res.data.products);
    });
  }, []);
  return (
    <>
      <div className='container'>
        {" "}
        <h1>Our Unique Products</h1>
        <div className='row '>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              handleShortList={handleShortList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
