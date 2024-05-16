import React, { useState } from 'react';
import PricingStart from '../components/PricingStart'
import PricingComponent from '../components/PricingComponent';

function Pricing() {
  const [selectedField, setSelectedField] = useState(null);

  // Function to handle dropdown selection change
  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  // Function to determine the slice range based on the selected field
  const getSliceRange = () => {
    switch (selectedField) {
      case "Cyber Security":
        return [0, 10]; // Example slice range for Cyber Security
      case "Data Management":
        return [11, 20]; // Example slice range for Data Management
      case "Software Engineering":
        return [21, 30]; // Example slice range for Software Engineering
      case "Business Administration":
        return [31, 40]; // Example slice range for Business Administration
      case "Accounting":
        return [41, 50]; // Example slice range for Accounting
      default:
        return [0, 10]; // Default to the original slice range (Cyber Security)
    }
  };

  return (
    <>
      <PricingStart />
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-32 bg-base-200 place-items-center white-text">
        <h1 className="text-4xl font-bold white-text">
            Mentorship Information
          </h1>
        </div>
        <div className="grid h-20 bg-base-200 place-items-center">

          <select
            className="select select-primary w-full max-w-xs"
            defaultValue=""
            onChange={handleFieldChange}
          >
            <option value="Cyber Security">Cyber Security</option>
            <option value="Data Management">Data Management</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Accounting">Accounting</option>
          </select>
        </div>
      </div>
      <PricingComponent sliceRange={getSliceRange()} />
    </>
  );
  
}

export default Pricing;
