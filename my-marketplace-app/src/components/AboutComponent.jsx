import React from "react";
import AboutImage from "../assets/images/About.jpg";
import MiningImage from "../assets/images/Mining.jpg";
import PioneeringImage from "../assets/images/Pioneering.jpg";
import IILogo from "../assets/images/IILogo.jpg";
import "./DaisyComponents.css";

function AboutComponent() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${AboutImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center white-text">
          <div className="max-w-md">
            <h1 className="mb-32 text-5xl font-bold">
              We All Start Somewhere.
            </h1>
            <p className="mb-32 pt-10 text-lg place-items-end">
              The essence lies not in the manner of commencement, but in the act
              of initiation itself.
            </p>
          </div>
        </div>
      </div>

      <div className="hero min-h-85 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse white-text">
          <img
            src={MiningImage}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Mining Image"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Charting New Horizons: The Inception of Insight | Influx
            </h1>
            <p className="py-6">
              In the genesis of Insight | Influx, a transformative journey
              unfolded from the depths of blue-collar to the heights of
              technological innovation. Rooted in the belief that every obstacle
              is an opportunity, the company emerged as a beacon of guidance for
              those seeking to navigate the uncharted waters of career
              transformation. With unwavering determination and a steadfast
              commitment to empowerment, Insight | Influx heralds a new era of
              possibility, where the journey from the coal face to the cutting
              edge is not just a dream, but a tangible reality.
            </p>
          </div>
        </div>
      </div>

      <div className="hero min-h-85 bg-base-200">
        <div className="hero-content flex-col lg:flex-row white-text">
          <img
            src={PioneeringImage}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Pioneering Today Image"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Pioneering Tomorrow: Insight | Influx Today
            </h1>
            <p className="py-6">
              In the present day, Insight | Influx stands as a testament to
              resilience and innovation, boasting a diverse team of 50 seasoned
              professionals. Each adept in their respective domains, our
              workforce of 50 individuals is strategically distributed across
              five pivotal fields: Cybersecurity, Data Management, Software
              Engineering, Accounting, and Business Administration. United by a
              shared vision of driving technological advancement and fostering
              excellence, our collective expertise fuels the engine of progress.
              Through a commitment to continuous learning and adaptability, we
              navigate the ever-evolving landscape of industry standards,
              propelling Insight | Influx to the forefront of innovation and
              leadership in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className="hero min-h-85 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse white-text">
          <img
            src={IILogo}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Insight | Influx Logo"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Forging Futures: Insight | Influx Tomorrow
            </h1>
            <p className="py-6">
              Looking ahead, Insight | Influx envisions a future where
              mentorship continues to pave the path to success for aspiring professionals
              seeking entry into the pivotal realms of Cybersecurity, Data
              Management, Software Engineering, Accounting, and Business
              Administration. With a steadfast commitment to nurturing talent
              and fostering growth, our company stands poised to bridge the gap
              between ambition and achievement. As we chart new horizons and redefine industry
              standards, Insight | Influx remains dedicated to shaping the next
              generation of leaders and innovators, propelling them towards a
              future filled with boundless opportunities and unparalleled
              success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
