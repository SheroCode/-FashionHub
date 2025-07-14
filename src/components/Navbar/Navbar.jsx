import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";

import {
  CartStore,
} from "../../Contexts/CartContext/CartContext";
function Navbar() {
  const { cart } = useContext(CartStore);
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white fixed-top border-bottom border-2'>
        <div className='container'>
          <Link to={""} className='navbar-brand'>
            FashionHub
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink to={""} className='nav-link ' aria-current='page'>
                Home
              </NavLink>

              <NavLink to={"login"} className='nav-link '>
                Login
              </NavLink>
              <NavLink to={"register"} className='nav-link '>
                Register
              </NavLink>
              {/* CART */}
              <NavLink
                to={"cart"}
                className='nav-link d-flex gap-1  align-items-center'
                aria-current='page'>
                <GiShoppingCart className='fs-4' />
                {cart.length > 0 && (
                  <div className='cart-counter'> {cart.length} </div>
                )}
              </NavLink>
              {/* WISHLIST */}
              <NavLink
                to={"wishlist"}
                className='nav-link d-flex gap-1  align-items-center'
                aria-current='page'>
                <FaHeart className='fs-5' />
                {cart.length > 0 && (
                  <div className='cart-counter'> {cart.length} </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
