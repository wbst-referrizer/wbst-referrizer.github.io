import React from "react";
import blog1 from "../../images/blog/featured.jpg";
import author2 from "../../images/blog/author3.jpg";
import blog2 from "../../images/blog/blog1.jpg";
import blog3 from "../../images/blog/blog2.jpg";
import blog4 from "../../images/blog/blog3.jpg";
import { Link } from "gatsby";

const FeaturedPost = () => {
  return (
    <div className="featured-post">
      <div className="container">
        <div className="featured-content">
          <div className="featured-view">
            <Link to="/blogdetail">
              <div className="post-box">
                <div className="post-img">
                  <img src={blog1} alt="" />
                </div>
                <div className="post-info">
                  <span className="partner-tag">Partner Up</span>
                  <span>6 min read</span>
                </div>
                <h3>
                  How to use data-driven marketing to shape your campaigns
                </h3>
                <div className="post-author">
                  <img src={author2} alt="" />
                  <div className="author-info">
                    <h6>Esther Howard</h6>
                    <span>Former Associate Manager of Customer Support</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="featured-related-post">
            <div className="featured-related-post-box">
              <div className="featured-img">
                <img src={blog2} alt="" />
              </div>
              <div className="featured-info">
                <div className="post-info">
                  <span className="reputation-tag">Reputation</span>
                  <span>6 min read</span>
                </div>
                <h4>How to turn customers into brand advocates</h4>
              </div>
            </div>

            <div className="featured-related-post-box">
              <div className="featured-img">
                <img src={blog3} alt="" />
              </div>
              <div className="featured-info">
                <div className="post-info">
                  <span className="partner-tag">Partner Up</span>
                  <span>6 min read</span>
                </div>
                <h4>How to win customers and keep them for life</h4>
              </div>
            </div>

            <div className="featured-related-post-box">
              <div className="featured-img">
                <img src={blog4} alt="" />
              </div>
              <div className="featured-info">
                <div className="post-info">
                  <span className="loyalty-tag">Loyalty</span>
                  <span>6 min read</span>
                </div>
                <h4>Reasons why customer reviews are important</h4>
              </div>
            </div>

            <div className="featured-related-post-box">
              <div className="featured-img">
                <img src={blog2} alt="" />
              </div>
              <div className="featured-info">
                <div className="post-info">
                  <span className="marketing-tag">Marketing</span>
                  <span>6 min read</span>
                </div>
                <h4>How to win customers and keep them for life</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
