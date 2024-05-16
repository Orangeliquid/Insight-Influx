import React from 'react';
import AboutComponent from '../components/AboutComponent';
import SuggestionButtons from '../components/SuggestionButtons';



function About() {
    return (
      <>
      <AboutComponent />
      <SuggestionButtons
      question='Inspired By Our Journey?'
      initiative='Feel Free To Browse Our Fields Of Expertise'
      />
      </>
    );
  }
  
  export default About;