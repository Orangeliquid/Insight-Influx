import React, { useState, useEffect } from "react";
import SignUpImage from "../assets/images/SignUp.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate(); // Accessing navigate function
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/csrf-token-endpoint/"
        );
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSigningUp(true); // Set signing up state to true to show loading spinner

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setIsSigningUp(false); // Reset signing up state
      return; // Don't submit the form if passwords don't match
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter and one number."
      );
      setIsSigningUp(false); // Reset signing up state
      return; // Don't submit the form if password requirements are not met
    }

    try {
      const url = "http://127.0.0.1:8000/sign-up-view/";
      const data = {
        username,
        email,
        password,
      };

      const csrftoken = getCookie("csrftoken");

      const response = await axios.post(url, data, {
        headers: {
          "X-CSRFToken": csrftoken,
        },
        // Does not matter, @csrf_exempt is used on backend
      });

      if (response.status === 200) {
        // Redirect to sign-in page after successful registration
        navigate("/SignIn");

        // Reset form fields and state after successful sign-up
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPasswordsMatch(true);
        setPasswordError("");
        setIsSigningUp(false); // Reset signing up state
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setIsSigningUp(false); // Reset signing up state
      // Handle error (e.g., display error message to the user)
    }

    function getCookie(name) {
      const cookieValue = document.cookie.match(
        "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
      );
      return cookieValue ? cookieValue.pop() : "";
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${SignUpImage})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold white-text">Sign Up!</h1>
          <p className="py-6 white-text">
            With only a few small details, you will begin your journey towards
            prosperity in the field of your dreams!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* CSRF token input */}
            <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="John Smith"
                className="input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@domain.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {!passwordsMatch && (
                <p className="text-pink">Passwords do not match</p>
              )}
              {passwordError && <p className="text-pink">{passwordError}</p>}
              {isSigningUp && (
                <p className="loading loading-spinner text-secondary">
                  Signing up...
                </p>
              )}
              <label className="label">
                <Link to="/SignIn" className="label-text-alt link link-hover">
                  Already Have An Account? Sign In
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={isSigningUp}>
                {isSigningUp ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
