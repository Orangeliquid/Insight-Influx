import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PersonCard = ({
  firstName,
  lastName,
  age,
  country,
  yoe,
  bio,
  bgcolor,
  picture,
}) => {
  return (
    <div className={`card w-[60rem] shadow-xl bg-${bgcolor}`}>
      <div className="card-body white-text">
        <figure>
          <div className="avatar">
            <div className="w-20 mask mask-squircle">
              <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
          </div>
        </figure>
        <div className="card-actions justify-center">
          <Link to="/Pricing" className="btn btn-primary">
            {firstName} {lastName}
          </Link>
        </div>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <p>Years of Experience: {yoe}</p>
        <p className="pb-12">Bio: {bio}</p>
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  yoe: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default PersonCard;
