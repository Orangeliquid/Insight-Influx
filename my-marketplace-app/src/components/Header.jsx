import React, { useState, useEffect } from "react";
import "./DaisyComponents.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    setIsSignedIn(!!token); // Set isSignedIn based on whether token exists
    setUsername(storedUsername); // Set username based on stored value
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      const storedUsername = localStorage.getItem("username");

      setIsSignedIn(!!token);
      setUsername(storedUsername);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsSignedIn(false);
    setUsername("");
    navigate("/"); // Redirect to home page after sign-out
  };

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <p>Professionals</p>
              <ul className="p-2">
                <li>
                  <Link to="/CyberSecurity">Cyber Security</Link>
                </li>
                <li>
                  <Link to="/DataManagement">Data Management</Link>
                </li>
                <li>
                  <Link to="/SoftwareEngineering">Software Engineering</Link>
                </li>
                <li>
                  <Link to="/BusinessAdministration">
                    Business Administration
                  </Link>
                </li>
                <li>
                  <Link to="/Accounting">Accounting</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Insight | Influx</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Professionals</summary>
              <ul className="p-2 dropdown">
                <li>
                  <Link to="/CyberSecurity">Cyber Security</Link>
                </li>
                <li>
                  <Link to="/DataManagement">Data Management</Link>
                </li>
                <li>
                  <Link to="/SoftwareEngineering">Software Engineering</Link>
                </li>
                <li>
                  <Link to="/BusinessAdministration">
                    Business Administration
                  </Link>
                </li>
                <li>
                  <Link to="/Accounting">Accounting</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isSignedIn ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="white-text">
                <summary className="white-text">{username}</summary>
                <ul className="p-4 dropdown">
                  <li>
                    <Link to="/Profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handleSignOut}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        ) : (
          <Link to="/SignIn" className="btn btn-primary">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
