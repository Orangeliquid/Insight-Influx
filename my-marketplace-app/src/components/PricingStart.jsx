import React from "react";
import "./DaisyComponents.css";
import PricingStartImage from "../assets/images/PricingStart2.jpg";

function PricingStart() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${PricingStartImage})`,
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold white-text">
            Which Plan Is Right For You?
          </h1>
          <p className="py-12 white-text">
            Scroll through each plan to figure out which plan suits your journey!
          </p>

          <div className="h-96 carousel carousel-vertical">
            <div className="carousel-item h-full">
              <div className="card w-[26rem] bg-success text-primary-content">
                <div className="card-body">
                  <h2 className="card-title white-text font-bold">Single Session</h2>
                  <p className="text-white">
                    Looking to see what we have to offer? A single session with
                    the Professional of your choice is a great option!
                  </p>
                  <div className="badge white-text font-bold">One Time Session</div>
                  <div className="badge badge-accent white-text font-bold">60 Minutes With Your Professional</div>
                  <div className="badge badge-primary white-text font-bold">Free Follow Up Analysis</div>
                  <div className="badge white-text font-bold">Low Commitment</div>
                  <div className="badge badge-secondary white-text font-bold">Only $50!</div>
                  <div className="card-actions justify-end font-bold">
                    <button className="btn btn-primary font-bold">Purchase Single Session</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="carousel-item h-full">
              <div className="card w-[26rem] bg-indigo text-primary-content">
                <div className="card-body">
                  <h2 className="card-title white-text font-bold">Monthly Subscription</h2>
                  <p className="text-white">
                    Ahh the sampler platter, good choice! This allows you to sample our Professionals!
                  </p>
                  <div className="badge white-text font-bold">Five Monthly Sessions</div>
                  <div className="badge badge-accent white-text font-bold">You Schedule The Meetings</div>
                  <div className="badge badge-primary white-text font-bold">Follow Up Analysis After Each Session</div>
                  <div className="badge white-text font-bold">Medium/High Commitment</div>
                  <div className="badge badge-secondary white-text font-bold">$150/Month</div>
                  <div className="card-actions justify-end font-bold">
                    <button className="btn btn-primary font-bold">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="carousel-item h-full">
              <div className="card w-[26rem] bg-warning text-primary-content">
                <div className="card-body">
                  <h2 className="card-title text-black font-bold">Mentorship Position</h2>
                  <div className="badge badge-primary white-text font-bold">Eight Member Panel Interview Required</div>
                  <p className="text-blue">
                    This is spicy! Upon acceptance, you will be taken under the wing of one of our Professionals.
                  </p>
                  
                  <div className="badge white-text font-bold">Weekly Meetings With Mentor</div>
                  <div className="badge badge-accent white-text font-bold">Daily Correspondance To Track Progress</div>
                  <div className="badge badge-primary white-text font-bold">Weekly Analysis of Goal Progression</div>
                  <div className="badge white-text font-bold">Life Altering Commitment</div>
                  <div className="badge badge-secondary white-text font-bold">$2000/month If Accepted</div>
                  <div className="card-actions justify-end font-bold">
                    <button className="btn btn-accent font-bold">Apply For Mentorship</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingStart;
