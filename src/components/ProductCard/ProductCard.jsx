import React, { useState } from "react";

function ProductCard({ product, handleShortList }) {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    if (counter == product.stock) return;
    setCounter(counter + 1);
  }
  function handleDecrease() {
    if (counter == 0) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <div className='col-lg-3  col-md-6 col-8 text-center mx-auto mb-3  flex-start'>
        <div className=' card product-card border-0 shadow  '>
          <img
            src={product.thumbnail}
            className='card-img-top '
            alt={product.title}
          />
          <div className='card-body'>
            <h5 className='card-title  text-truncate' title={product.title}>
              {product.title}
            </h5>
            <p className='card-text text-truncate'>{product.description}</p>

            <div className='buttons d-flex flex-column '>
              {/* Bonus: Short List Button */}
              <button
                type='button'
                onClick={() => handleShortList(product.title)}
                className='btn btn-outline-secondary  rounded-5  my-3  '>
                Add short list
              </button>
              {/* Toggle counter */}

              {counter == 0 ? (
                <button
                  className='btn btn-primary rounded-5 d-block'
                  onClick={handleIncrease}>
                  Add To Cart
                </button>
              ) : (
                <div
                  className='btn-group d-block'
                  role='group'
                  aria-label='Basic outlined example'>
                  <button
                    type='button'
                    onClick={handleIncrease}
                    className='btn btn-outline-success'>
                    +
                  </button>
                  <button type='button' className='btn '>
                    {counter}
                  </button>
                  <button
                    type='button'
                    onClick={handleDecrease}
                    className='btn btn-outline-danger'>
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
