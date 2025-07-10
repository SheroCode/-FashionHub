import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
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
              <NavLink to={"login"} className='nav-link'>
                Login
              </NavLink>
              <NavLink to={"register"} className='nav-link'>
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
