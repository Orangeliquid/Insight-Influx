import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import PricingRow from "./PricingRow";
import "./DaisyComponents.css";

function getRandomMentorshipSpots() {
  return Math.floor(Math.random() * 10) + 1;
}

function ProfessionalsSection({ sliceRange }) {
  const [professionals, setProfessionals] = useState([]);

  // Define fetchProfessionals using useCallback to memoize it
  const fetchProfessionals = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/random-users/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProfessionals(data.slice(sliceRange[0], sliceRange[1]));
      console.log('Professionals:', data.slice(sliceRange[0], sliceRange[1])); // Log the updated value here
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  }, [sliceRange]);

  useEffect(() => {
    fetchProfessionals();
  }, [sliceRange, fetchProfessionals]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Years of Experience</th>
              <th>Mentorship Spots Left</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((professional, index) => (
              <PricingRow
                key={index}
                firstName={professional.first_name || ""}
                lastName={professional.last_name || ""}
                country={professional.country || ""}
                age={professional.age || ""}
                yoe={professional.years_of_experience || ""}
                picture={professional.picture_large || ""}
                mentorshipSpotsLeft={getRandomMentorshipSpots()} /* This can be added to the db later to make it not random everytime */
              />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Years of Experience</th>
              <th>Mentorship Spots Left</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

ProfessionalsSection.propTypes = {
  sliceRange: PropTypes.array.isRequired,
};

export default ProfessionalsSection;
