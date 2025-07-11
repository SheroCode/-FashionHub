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
        <div className='search d-flex my-5 gap-5'>
          {" "}
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'>
            Search
          </button>
        </div>
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
