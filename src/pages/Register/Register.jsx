// src/Pages/Register.jsx
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data", data);
  };

  const password = watch("password");

  return (
    <div className="container p-5">
      <div className="card p-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-2"
            {...register("username", {
              required: "Username is required",
              validate: (value) => !value.includes(" ") || "No spaces allowed",
            })}
          />
          <p className="text-danger">{errors.username?.message}</p>

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
          />
          <p className="text-danger">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-2"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                message:
                  "At least 1 uppercase, 1 number, 1 special character",
              },
            })}
          />
          <p className="text-danger">{errors.password?.message}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mb-2"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <p className="text-danger">{errors.confirmPassword?.message}</p>

          <input
            type="text"
            placeholder="Address (optional)"
            className="form-control mb-2"
            {...register("address")}
          />

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
