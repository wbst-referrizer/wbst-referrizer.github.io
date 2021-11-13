import React from "react";
import { Link } from "gatsby";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="container">
        <h2>Ready to Maximize your online reputation?</h2>
        <p>
          Our clients see an average 20% growth in their business within the
          first month of using Referrizer. Why get left behind?
        </p>
        <div className="call-to-action-button">
          <Link to="/">Signup For FREE</Link>
          <Link to="/">Book A Demo</Link>
        </div>
        <span>No credit card required</span>
      </div>
    </div>
  );
};

export default CallToAction;
