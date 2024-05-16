import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function HeroSection({ backgroundImage, title, subtitle, buttonText }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold white-text">{title}</h1>
          <p className="mb-5 white-text">{subtitle}</p>
          <Link to="/Pricing" className="btn btn-primary">{buttonText}</Link>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default HeroSection;

