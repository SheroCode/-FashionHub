import { useSelector } from "react-redux";
import WishListCard from "../../components/WishListCard/WishListCard";

function WishList() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems);

  return (
    <div className='container'>
      <div className='row'>
        {wishlistItems.length === 0 ? (
          <h3 className='text-center'>Your wishlist is empty</h3>
        ) : (
          wishlistItems.map((product) => (
            <WishListCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default WishList;
