import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully!!", {
          position: "top-center",
          theme: "colored",
        });
        form.reset();
        setSuccess(true);
      })
      .catch((err) => {
        toast.error("Please Try Again...Login Unsuccessfull !!!", {
          theme: "colored",
          position: "top-center",
        });
      });
  };
  return (
    <div className="hero w-full py-20">
      {success ? (
        <ToastContainer position="top-center"></ToastContainer>
      ) : (
        <ToastContainer></ToastContainer>
      )}
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImg} alt="login-img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            Have an account?{" "}
            <Link to="/signUp" className="font-semibold text-orange-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
