import React from 'react';
import AccountingImage from '../assets/images/Accounting.jpg';
import ProfessionalsMain from '../components/ProfessionalsMain';
import ProfessionalsSection from '../components/ProfessionalsSection';
import SuggestionButtons from '../components/SuggestionButtons';

function Accounting() {
  return (
    <>
      <ProfessionalsMain
        backgroundImage={AccountingImage}
        title="Accounting Professionals"
        subtitle="Our Accounting Professionals are at your service, looking to fast track you into the world of Accounting!"
      />
      <ProfessionalsSection
        sliceRange={[41, 50]}
        cardTitle='Scroll through our Accounting team'
      />
      <SuggestionButtons
      question='Not seeing the profession you are looking for?'
      initiative='Check out these other fields!'
      />
    </>
  );
}

export default Accounting;