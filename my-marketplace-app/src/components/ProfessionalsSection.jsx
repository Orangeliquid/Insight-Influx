import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import PersonCard from "./PersonCard";
import "./DaisyComponents.css";

function getRandomColor() {
  const colors = ["indigo", "teal", "orange", "pink", "base-200", "base-300"]; // Add more colors if needed
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ProfessionalsSection({ sliceRange, cardTitle }) {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function fetchProfessionals() {
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
    }
    fetchProfessionals();
  }, [sliceRange]);
  
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-96 carousel carousel-vertical m-20">
          <div className="card carousel-item h-full justify-center">
            <div className="bg-base-100">
              <h2 className="text-5xl font-bold white-text">
                {cardTitle}
              </h2>
              <p className="text-2xl content-center white-text">
                We know you will find the perfect mentor!
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {professionals.map((professional, index) => (
            <div key={index} className="carousel-item h-full">
              <PersonCard
                key={index} // Ensure each PersonCard has a unique key
                firstName={professional.first_name || ""}
                lastName={professional.last_name || ""}
                age={professional.age || ""}
                country={professional.country || ""}
                bio={professional.bio_info || ""}
                yoe={professional.years_of_experience || ""}
                bgcolor={getRandomColor()}
                picture={professional.picture_large || ""}
              />
            </div>
          ))}
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}

ProfessionalsSection.propTypes = {
  sliceRange: PropTypes.array.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default ProfessionalsSection;
