import React from "react";
import img1 from "../../images/blog/resource1.jpg";
import img2 from "../../images/blog/resource2.jpg";
import img3 from "../../images/blog/resource3.jpg";
import img4 from "../../images/blog/resource4.jpg";

const RelatedResource = () => {
  return (
    <div className="related-resource">
      <div className="container">
        <h2>Related resources</h2>
        <div className="related-resource-container">
          <div className="related-resource-box video-tag">
            <div className="related-resource-cover">
              <img src={img1} alt="" />
            </div>
            <div className="related-resource-info">
              <span>Video</span>
              <h4>How to turn customers into brand advocates</h4>
            </div>
          </div>
          <div className="related-resource-box webinar-tag">
            <div className="related-resource-cover">
              <img src={img2} alt="" />
            </div>
            <div className="related-resource-info">
              <span>Webinars</span>
              <h4>How to turn customers into brand advocates</h4>
            </div>
          </div>
          <div className="related-resource-box studies-tag">
            <div className="related-resource-cover">
              <img src={img3} alt="" />
            </div>
            <div className="related-resource-info">
              <span>Studies</span>
              <h4>How to turn customers into brand advocates</h4>
            </div>
          </div>
          <div className="related-resource-box paper-tag">
            <div className="related-resource-cover">
              <img src={img4} alt="" />
            </div>
            <div className="related-resource-info">
              <span>White paper</span>
              <h4>How to turn customers into brand advocates</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedResource;
