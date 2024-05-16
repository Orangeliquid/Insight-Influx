import React from 'react';
import DataManagementImage from '../assets/images/DataManagement.jpg';
import ProfessionalsMain from '../components/ProfessionalsMain';
import ProfessionalsSection from '../components/ProfessionalsSection';
import SuggestionButtons from '../components/SuggestionButtons';

function DataManagement() {
  return (
    <>
      <ProfessionalsMain
        backgroundImage={DataManagementImage}
        title="Data Management Professionals"
        subtitle="Our Data Management Professionals are at your service, looking to fast track you into the world of Data Management!"
      />
      <ProfessionalsSection
        sliceRange={[11, 20]}
        cardTitle='Scroll through our Data Management team'
      />
      <SuggestionButtons
      question='Not seeing the profession you are looking for?'
      initiative='Check out these other fields!'
      />
    </>
  );
}

export default DataManagement;
