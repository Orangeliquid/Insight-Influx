import React from "react";
import PropTypes from 'prop-types';

function ProfessionalsMain({ backgroundImage, title, subtitle }) {
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
        </div>
      </div>
    </div>
  );
}

ProfessionalsMain.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ProfessionalsMain;
