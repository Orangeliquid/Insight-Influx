import React from "react";
import "./DaisyComponents.css";
import { Link } from "react-router-dom";
import SeasonedProf from "../assets/images/Seasoned_prof.jpg";
import BlurryOW from "../assets/svg/blurry-o-b.svg";

function TimelineSection() {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center"></div>
      <div className="hero min-h-half bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={SeasonedProf}
            alt="Seasoned Professional"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold white-text">
              Browse Our Seasoned Professionals
            </h1>
            <p className="py-6">
              We have carefully selected 50 professionals across five distinct
              occupations, boasting a collective experience of over 1,000 years.
              Our team ensures cutting-edge expertise in each of these fields.
            </p>
            <div className="join">
              <Link to="/CyberSecurity" className="btn join-item bg-pink">
                Cyber Security
              </Link>
              <Link to="/DataManagement" className="btn join-item bg-info">
                Data Management
              </Link>
              <Link
                to="/SoftwareEngineering"
                className="btn join-item bg-orange"
              >
                Software Engineering
              </Link>
            </div>
            <div className="join">
              <Link
                to="/BusinessAdministration"
                className="btn join-item bg-teal"
              >
                Business Administration
              </Link>
              <Link to="/Accounting" className="btn join-item bg-indigo">
                Accounting
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid h-20 card bg-base-100 rounded-box place-items-center mb-5">
        <h2 className="text-5xl font-bold white-text"> Success Timeline</h2>
        <p>We are certain that with our timeline, your success is assured!</p>
      </div>
      <ul
        className="timeline timeline-vertical lg:timeline-horizontal bg-cover bg-center bg-no-repeat flex justify-center"
        style={{
          backgroundImage: `url(${BlurryOW})`,
          backgroundSize: "auto 400%",
          animation: "gradientAnimation 30s ease infinite",
        }}
      >
        <li>
          <div className="timeline-start timeline-box white-text">
            Browse Professionals In Your Field
          </div>
          <div className="timeline-middle white-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle white-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box white-text">Sign Up</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box white-text">
            Purchase Coaching
          </div>
          <div className="timeline-middle white-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle white-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box white-text">
            Discuss Feedback
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box white-text">
            See Results
          </div>
          <div className="timeline-middle white-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <div className="divider"></div>
    </div>
  );
}

export default TimelineSection;
