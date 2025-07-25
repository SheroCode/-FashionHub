import { useContext } from "react";
import { CartStore } from "../../Contexts/CartContext/CartContext";
import CartCard from "../../components/CartCard/CartCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartStore);

  return (
    <>
      {cart.length == 0 ? (
        <div className='d-flex flex-column  align-items-center  gap-5 container'>
          <h3>Your Cart Is Empty</h3>
          <Link to='/'>
            <button className='btn btn-primary '>Back to home</button>
          </Link>
        </div>
      ) : (
        cart.map((product) => <CartCard key={product.id} product={product} />)
      )}
    </>
  );
}

export default Cart;
