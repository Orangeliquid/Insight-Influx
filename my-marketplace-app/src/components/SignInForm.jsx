import React, { useState } from "react";
import SignInImage from "../assets/images/SignIn3.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignInComponent() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null); // Add state for error message
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsSigningIn(true);

    try {
      const url = "http://127.0.0.1:8000/sign-in-view/";
      const data = {
        username,
        password,
      };

      const response = await axios.post(url, data);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const fetchedUsername = username;
        localStorage.setItem("username", fetchedUsername); // Store username in localStorage
        navigate("/");
        window.location.reload();
      } else {
        throw new Error("Failed to sign in");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setIsSigningIn(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${SignInImage})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold white-text">Sign In!</h1>
          <p className="py-6 white-text">
            Let&apos;s get you signed in and back to your journey!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link to="/SignUp" className="label-text-alt link link-hover">
                  No Account? Sign Up
                </Link>
              </label>
            </div>
            {error && <p className="text-pink mt-2">{error}</p>}{" "}
            {/* Render error message */}
            <div className="form-control mt-6">
              {isSigningIn && (
                <div className="loading loading-spinner text-secondary">
                  Signing in...
                </div>
              )}
              <button className="btn btn-primary" disabled={isSigningIn}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInComponent;
