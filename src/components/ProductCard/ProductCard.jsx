import { useContext } from "react";
import { CartStore } from "../../Contexts/CartContext/CartContext";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product, handleShortList }) {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartStore);

  const itemInCart = cart.find((p) => p.id === product.id);

  return (
    <div className="col-lg-3 col-md-6 col-8 text-center mx-auto mb-3">
      <div className="card product-card border-0 shadow">
        <Link to={`product/${product.id}`}>
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-truncate" title={product.title}>
            {product.title}
          </h5>
          <p className="card-text text-truncate">{product.description}</p>

          <div className="d-flex justify-content-between">
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    product.rating >= star
                      ? "text-warning me-1"
                      : "text-secondary me-1"
                  }
                />
              ))}
            </div>
            <p className="mb-0 fw-semibold">$ {product.price}</p>
          </div>

          <div className="buttons d-flex flex-column">
            {handleShortList && (
              <button
                type="button"
                onClick={() => handleShortList(product?.title)}
                className="btn btn-outline-secondary rounded-5 mt-3"
              >
                Add to Shortlist
              </button>
            )}

            {!itemInCart ? (
              <button
                className="btn btn-primary rounded-5 d-block mt-3"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            ) : (
              <div
                className="btn-group d-block mt-3"
                role="group"
                aria-label="Quantity"
              >
                <button
                  type="button"
                  onClick={() => increaseQuantity(product.id)}
                  className="btn btn-outline-success"
                >
                  +
                </button>
                <button type="button" className="btn">
                  {itemInCart.quantity}
                </button>
                <button
                  type="button"
                  onClick={() => decreaseQuantity(product.id)}
                  className="btn btn-outline-danger"
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
