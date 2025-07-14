// src/Pages/Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setUser({ email: data.email });
    navigate("/cart");
  };

  return (
    <div className="container p-5">
      <div className="card p-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
            />
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
