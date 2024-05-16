import React from 'react';
import HeroSection from '../components/HeroSection';
import londonImage from '../assets/images/London.jpg';
import Timeline from '../components/Timeline';


function Home() {
  return (
    <>
      <HeroSection
        backgroundImage={londonImage}
        title="You have a goal."
        subtitle="We have professionals to help you meet it."
        buttonText="Get Started"
      />
      <Timeline />
    </>
  );
}

export default Home;
