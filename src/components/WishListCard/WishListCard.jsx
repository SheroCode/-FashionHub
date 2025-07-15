import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../Store/wishlistSlice";

function WishListCard({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className='col-lg-3 col-md-6 col-8 text-center mx-auto mb-3'>
      <div className='card product-card border-0 shadow'>
        <div className='position-relative '>
          <span
            className='wishlist-btn position-absolute '
            onClick={() => dispatch(toggleWishlist(product))}
          >
            {isInWishlist ? <FaHeart color='tomato' /> : <FaRegHeart />}
          </span>
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
        </div>
      </div>
    </div>
  );
}

export default WishListCard;
