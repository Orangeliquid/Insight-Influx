import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function SuggestionButtons({ question, initiative }) {
  return (
    <>
      <div>
        <p className="flex justify-center items-center">
          {question}
        </p>
        <p className="flex justify-center items-center">
          {initiative}
        </p>
      </div>
      <div className="flex justify-center items-center m-10">
        <div className="join join-vertical lg:join-horizontal">
          <Link to="/CyberSecurity" className="btn join-item bg-pink">
            Cyber Security
          </Link>
          <Link to="/DataManagement" className="btn join-item bg-info">
            Data Management
          </Link>
          <Link to="/SoftwareEngineering" className="btn join-item bg-orange">
            Software Engineering
          </Link>
          <Link to="/BusinessAdministration" className="btn join-item bg-teal">
            Business Administration
          </Link>
          <Link to="/Accounting" className="btn join-item bg-indigo">
            Accounting
          </Link>
        </div>
      </div>
    </>
  );
}

SuggestionButtons.propTypes = {
  question: PropTypes.string.isRequired,
  initiative: PropTypes.string.isRequired,
};

export default SuggestionButtons;
