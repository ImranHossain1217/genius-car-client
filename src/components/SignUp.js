import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaFacebook,FaGoogle,FaGithub } from "react-icons/fa";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Sign Up Successfully!!", {
          position: "top-center",
          theme: "colored",
        });
        form.reset();
        setSuccess(true);
      })
      .catch((err) => {
        toast.error("Please Try Again...", {
          theme: "colored",
          position: "top-center",
        });
      });
  };
  const handleGoogle = () => {
     signInWithGoogle();
  }
  return (
    <div className="hero w-full py-20">
      {success ? (
        <ToastContainer></ToastContainer>
      ) : (
        <ToastContainer></ToastContainer>
      )}
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImg} alt="login-img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center mt-5">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
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
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div>
          <h4 className="text-xl text-center font-semibold"> Or, sign in with</h4>
                <div className="flex justify-center py-5 text-3xl">
                    <FaGoogle onClick={handleGoogle} className="text-sky-600 cursor-pointer"></FaGoogle>
                    <FaFacebook className="text-sky-600 cursor-pointer mx-5"></FaFacebook>
                    <FaGithub className="cursor-pointer"></FaGithub>
                </div>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
