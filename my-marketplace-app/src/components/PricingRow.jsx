import React from 'react';
import PropTypes from 'prop-types';

const PricingRow = ({ firstName, lastName, country, age, yoe, mentorshipSpotsLeft, picture }) => {
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={picture}
                alt={`${firstName} ${lastName}`}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{firstName} {lastName}</div>
            <div className="text-sm opacity-50">{country}</div>
            <div className="text-sm opacity-50">Age {age}</div>
          </div>
        </div>
      </td>
      <td>
        {yoe}
      </td>
      <td>
        {mentorshipSpotsLeft}
      </td>
    </tr>
  );
};

PricingRow.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    yoe: PropTypes.number.isRequired,
    mentorshipSpotsLeft: PropTypes.number.isRequired, // New prop
    picture: PropTypes.string.isRequired,
  };

export default PricingRow;
