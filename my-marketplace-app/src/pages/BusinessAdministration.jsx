import React from 'react';
import BusinessAdministrationImage from '../assets/images/BusinessAdministration.jpg';
import ProfessionalsMain from '../components/ProfessionalsMain';
import ProfessionalsSection from '../components/ProfessionalsSection';
import SuggestionButtons from '../components/SuggestionButtons';

function BusinessAdministration() {
  return (
    <>
      <ProfessionalsMain
        backgroundImage={BusinessAdministrationImage}
        title="Business Administration Professionals"
        subtitle="Our Business Administration Professionals are at your service, looking to fast track you into the world of Business Administration!"
      />
      <ProfessionalsSection
        sliceRange={[31, 40]}
        cardTitle='Scroll through our Business Administration team'
      />
      <SuggestionButtons
      question='Not seeing the profession you are looking for?'
      initiative='Check out these other fields!'
      />
    </>
  );
}

export default BusinessAdministration;