import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className='container p-5'>
        <div className='card p-5'>
          <h2>Login</h2>
          <form>
            {/* Email input */}
            <div className='form-outline mb-4'>
              <input type='email' className='form-control' />
              <label className='form-label'>Email address</label>
            </div>
            {/* Password input */}
            <div data-mdb-input-init className='form-outline mb-4'>
              <input type='password' className='form-control' />
              <label className='form-label'>Password</label>
            </div>

            {/* Submit button */}
            <button type='button' className='btn btn-primary btn-block mb-4'>
              Sign in
            </button>
            {/* Register buttons */}
            <div className='text-center'>
              <p>
                Not a member? <Link to='/register'>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
