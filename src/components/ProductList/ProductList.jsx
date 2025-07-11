import { useEffect, useState } from "react";
import { axiosInterceptors } from "../../Neworks/interceptors";
import ProductCard from "../ProductCard/ProductCard";
function ProductList() {
  const [products, setProduct] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  function handleShortList(productName) {
    alert(productName);
  }
  useEffect(() => {
    axiosInterceptors.get(`/products`).then((res) => {
      console.log(res.data.products);
      return setProduct(res.data.products);
    });
  }, []);
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='container'>
        {" "}
        <div className='search d-flex my-5 gap-5'>
          {" "}
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search for the products .....'
            aria-label='Search'
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
         
        </div>

        <div className='row '>
          {filteredProducts.map((product) => (
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
