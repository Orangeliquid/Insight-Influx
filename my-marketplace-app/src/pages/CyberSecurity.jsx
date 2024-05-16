import React from 'react';
import CyberSecurityImage from '../assets/images/Cyber_Security2.jpg';
import ProfessionalsMain from '../components/ProfessionalsMain';
import ProfessionalsSection from '../components/ProfessionalsSection';
import SuggestionButtons from '../components/SuggestionButtons';

function CyberSecurity() {
  return (
    <>
      <ProfessionalsMain
        backgroundImage={CyberSecurityImage}
        title="Cyber Security Professionals"
        subtitle="Our Cyber Security Professionals are at your service, looking to fast track you into the world of Cyber Security!"
      />
      <ProfessionalsSection
        sliceRange={[0, 10]}
        cardTitle='Scroll through our Cyber Security team'
      />
      <SuggestionButtons
      question='Not seeing the profession you are looking for?'
      initiative='Check out these other fields!'
      />
    </>
  );
}

export default CyberSecurity;
