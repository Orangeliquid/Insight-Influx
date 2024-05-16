import React from 'react';
import SoftwareEngineeringImage from '../assets/images/SoftwareEngineering.jpg';
import ProfessionalsMain from '../components/ProfessionalsMain';
import ProfessionalsSection from '../components/ProfessionalsSection';
import SuggestionButtons from '../components/SuggestionButtons';

function SoftwareEngineering() {
  return (
    <>
      <ProfessionalsMain
        backgroundImage={SoftwareEngineeringImage}
        title="Software Engineering Professionals"
        subtitle="Our Software Engineering Professionals are at your service, looking to fast track you into the world of Software Engineering!"
      />
      <ProfessionalsSection
        sliceRange={[21, 30]}
        cardTitle='Scroll through our Software Engineering team'
      />
      <SuggestionButtons
      question='Not seeing the profession you are looking for?'
      initiative='Check out these other fields!'
      />
    </>
  );
}

export default SoftwareEngineering;