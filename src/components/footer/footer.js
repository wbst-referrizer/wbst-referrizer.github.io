import React from "react";
import { Link } from "gatsby";
import logo from "../../images/footer/logo.svg";
import linkedin from "../../images/footer/linkedin.svg";
import twitter from "../../images/footer/twitter.svg";
import instagram from "../../images/footer/instagram.svg";
import facebook from "../../images/footer/facebook.svg";
import youtube from "../../images/footer/youtube.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <img src={logo} alt="" />
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">We’re Hiring</Link>
              </li>
              <li>
                <Link to="/">Investors</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li>
                <Link to="/">Customer Lead Generation</Link>
              </li>
              <li>
                <Link to="/">Customer Retention Boost</Link>
              </li>
              <li>
                <Link to="/">Reputation Manageent</Link>
              </li>
              <li>
                <Link to="/">Marketing Automation</Link>
              </li>
              <li>
                <Link to="/">PartnerUp Network</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Videos</Link>
              </li>
              <li>
                <Link to="/">Case Studies</Link>
              </li>
              <li>
                <Link to="/">Marketplace</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Knowledge Base</Link>
              </li>
              <li>
                <Link to="/">Live Chat</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Partners</h3>
            <ul>
              <li>
                <Link to="/">Development Partners</Link>
              </li>
              <li>
                <Link to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/">Partner Offers</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer">
          <ul className="social-icon">
            <li>
              <Link to="/">
                <img src={linkedin} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={twitter} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={instagram} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={facebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={youtube} alt="" />
              </Link>
            </li>
          </ul>

          <ul className="auth-menu">
            <li>
              <span>© 2013-2021 Referrizer Inc.</span>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Sign up for free</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
