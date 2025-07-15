import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartStore } from "../../Contexts/CartContext/CartContext";
import { toggleWishlist } from "../../Store/wishlistSlice";
import "./ProductCard.css";

function ProductCard({ product, handleShortList }) {
  const dispatch = useDispatch();

  // Get wishlist items from redux
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Check if product is already in wishlist
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  // Get cart context values
  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartStore);

  const itemInCart = cart.find((p) => p.id === product.id);

  return (
    <div className='col-lg-3 col-md-6 col-8 text-center mx-auto mb-3'>
      <div className='card product-card border-0 shadow'>
        <div className='position-relative'>
          {/* WISHLIST TOGGLE BUTTON */}
          <span
            className='wishlist-btn position-absolute'
            onClick={() => dispatch(toggleWishlist(product))}>
            {isInWishlist ? <FaHeart  color='tomato' /> : <FaRegHeart />}
          </span>

          {/* IMAGE */}
          <Link to={`product/${product.id}`}>
            <img
              src={product.thumbnail}
              className='card-img-top'
              alt={product.title}
            />
          </Link>
        </div>

        <div className='card-body'>
          <h5 className='card-title text-truncate' title={product.title}>
            {product.title}
          </h5>
          <p className='card-text text-truncate'>{product.description}</p>

          {/* RATING & PRICE */}
          <div className='d-flex justify-content-between'>
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
            <p className='mb-0 fw-semibold'>$ {product.price}</p>
          </div>

          {/* SHORTLIST & CART BUTTONS */}
          <div className='buttons d-flex flex-column'>
            {handleShortList && (
              <button
                type='button'
                onClick={() => handleShortList(product?.title)}
                className='btn btn-outline-secondary rounded-5 mt-3'>
                Add to Shortlist
              </button>
            )}

            {!itemInCart ? (
              <button
                className='btn btn-primary rounded-5 d-block mt-3'
                onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            ) : (
              <div className='btn-group d-block mt-3' role='group'>
                <button
                  type='button'
                  onClick={() => increaseQuantity(product.id)}
                  className='btn btn-outline-success'>
                  +
                </button>
                <button type='button' className='btn'>
                  {itemInCart.quantity}
                </button>
                <button
                  type='button'
                  onClick={() => decreaseQuantity(product.id)}
                  className='btn btn-outline-danger'>
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
