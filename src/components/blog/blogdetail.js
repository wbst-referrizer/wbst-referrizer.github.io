import React from "react";
import { Link } from "gatsby";
import NewsLetter from "./newsletter";
import blog from "../../images/blog/blog.jpg";
import author2 from "../../images/blog/author1.jpg";
import blog1 from "../../images/blog/blog-6.jpg";
import thumbup from "../../images/blog/thumbup.svg";
import funny from "../../images/blog/funny.svg";
import love from "../../images/blog/love.svg";
import wow from "../../images/blog/wow.svg";
import thumbdown from "../../images/blog/thumbdown.svg";
import { Button } from "react-bootstrap";
import RelatedResource from "./relatedresource";
import blog2 from "../../images/blog/blog1.jpg";
import blog3 from "../../images/blog/blog2.jpg";
import blog4 from "../../images/blog/blog3.jpg";
import author4 from "../../images/blog/author4.jpg";
import linkedin from "../../images/blog/linkedin.svg";
import twitter from "../../images/blog/twitter.svg";
import whatsapp from "../../images/blog/whatsapp.svg";
import messenger from "../../images/blog/messenger.svg";
import message from "../../images/blog/message.svg";
import rss from "../../images/blog/rss.svg";
import linkicon from "../../images/blog/link.svg";
import share from "../../images/blog/share.svg";

const BLogDetail = () => {
  return (
    <div className="blog-detail">
      <div className="blog-breadcrum">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Reputation</Link>
            </li>
            <li>
              <Link to="/">How to turn customers into brand advocates</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="blog-hero">
        <div className="container">
          <div className="blog-hero-container">
            <div className="hero-cover">
              <img src={blog} alt="" />
            </div>
            <div className="hero-info">
              <div className="post-info">
                <span className="reputation-tag">Reputation</span>
                <span>4 min</span>
              </div>
              <h2>How to turn customers into brand advocates</h2>
              <div className="post-author">
                <img src={author2} alt="" />
                <div className="author-info">
                  <h6>Avril Edwards</h6>
                  <span>Audio Content Producer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-detail-content">
        <div className="container">
          <div className="blog-content-grid">
            <div className="blog-content-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum sociis mattis nisl massa odio sed tortor, et
                commodo. Adipiscing vel quis viverra proin morbi diam viverra ut
                magna. Sed sit viverra commodo bibendum quisque luctus.{" "}
              </p>

              <h3>
                Aliquet nulla molestie viverra nulla sed blandit pellentesque
                malesuada et amet.
              </h3>

              <p>
                Urna egestas accumsan, pellentesque metus nam tempor et et
                porta. Volutpat integer sed quis sit. Nec, feugiat interdum in
                fringilla eget nisl elit, sit. Tristique erat blandit aliquam
                eget.
              </p>

              <p>
                Egestas consectetur enim libero ut lorem sit dui auctor.
                Bibendum pulvinar non quam at aliquam. Ultricies nulla donec
                mauris congue. Augue sed mauris pellentesque a. Potenti eu eu
                nibh libero ipsum purus egestas sit. Consectetur interdum
                aliquam, tincidunt faucibus purus in nulla purus elit. Velit
                nunc nulla cursus justo morbi mi, quis eget risus. Fusce aliquet
                aenean eget orci, donec mauris egestas. Iaculis adipiscing
                cursus feugiat praesent senectus purus odio. Metus sed orci
                purus urna tellus faucibus. Volutpat felis duis hac sed lobortis
                sem. Ac quam sed adipiscing in. Sapien amet, odio nullam ac
                lacus.
              </p>

              <img src={blog1} alt="" />

              <h3>
                Aliquet nulla molestie viverra nulla sed blandit pellentesque
                malesuada et amet.
              </h3>

              <p>
                Massa lacinia et maecenas elementum tellus elit. Viverra diam et
                nec netus morbi dui nulla purus. Mauris nam in tincidunt cras
                volutpat sagittis egestas eu aliquam. Purus blandit cursus dui
                tellus turpis fringilla facilisis. Cursus porta ultrices ut sed
                dui. Enim vestibulum consequat nec nunc adipiscing. Purus,
                imperdiet nulla aliquam, aliquam nulla id. Ut id aliquet posuere
                vitae aliquam semper.{" "}
              </p>

              <blockquote>
                Turpis et risus sapien, ut quis tortor tellus suspendisse
                scelerisque. Bibendum vulputate justo, nibh neque. Auctor
                viverra sagittis in faucibus ut sit viverra sapien.{" "}
              </blockquote>

              <p>
                Quisque vitae, bibendum quisque quam non. Turpis et risus
                sapien, ut quis tortor tellus suspendisse scelerisque. Bibendum
                vulputate justo, nibh neque. Auctor viverra sagittis in faucibus
                ut sit viverra sapien. Magna tempus, volutpat hendrerit ligula
                lorem malesuada nisi. Amet, et tortor amet at ultricies duis
              </p>

              <h3>
                Aliquet nulla molestie viverra nulla sed blandit pellentesque
                malesuada et amet.
              </h3>

              <p>
                Massa lacinia et maecenas elementum tellus elit. Viverra diam et
                nec netus morbi dui nulla purus. Mauris nam in tincidunt cras
                volutpat sagittis egestas eu aliquam. Purus blandit cursus dui
                tellus turpis fringilla facilisis. Cursus porta ultrices ut sed
                dui. Enim vestibulum consequat nec nunc adipiscing. Purus,
                imperdiet nulla aliquam, aliquam nulla id. Ut id aliquet posuere
                vitae aliquam semper.
              </p>

              <p>
                Quisque vitae, bibendum quisque quam non. Turpis et risus
                sapien, ut quis tortor tellus suspendisse scelerisque. Bibendum
                vulputate justo, nibh neque. Auctor viverra sagittis in faucibus
                ut sit viverra sapien. Magna tempus, volutpat hendrerit ligula
                lorem malesuada nisi. Amet, et tortor amet at ultricies duis
              </p>

              <div className="detail-topics">
                <span>Topics:</span>
                <span className="topic-tag">Reputation</span>
                <span className="topic-tag">Loyalty</span>
              </div>

              <div className="detail-author">
                <div className="post-author">
                  <img src={author4} alt="" />
                  <div className="author-info">
                    <ul className="author-social">
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
                    </ul>
                    <h6>Avril Edwards</h6>
                    <span>Audio Content Producer</span>
                    <p>
                      Massa lacinia et maecenas elementum tellus elit. Viverra
                      diam et nec netus morbi dui nulla purus. Mauris nam in
                      tincidunt cras volutpat sagittis egestas eu aliquam. Purus
                      blandit cursus dui tellus turpis fringilla facilisis.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-content-right">
              <div className="table-content">
                <h4>Table of contents</h4>
                <div className="table-content-post">
                  <ul>
                    <li>
                      <Link to="">
                        Aliquet nulla molestie viverra nulla sed blandit
                        pellentesque malesuada et amet.
                      </Link>
                    </li>
                    <li>
                      <Link to="">Pellentesque malesuada et amet.</Link>
                    </li>
                    <li>
                      <Link to="">
                        Molestie viverra nulla sed pellentesque.
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Aliquet nulla molestie viverra nulla sed blandit
                        pellentesque malesuada et amet.
                      </Link>
                    </li>
                    <li>
                      <Link to="">Pellentesque malesuada et amet.</Link>
                    </li>
                    <li>
                      <Link to="">
                        Molestie viverra nulla sed pellentesque.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="share-post">
                <ul className="share-social">
                  <li>
                    <Link to="/">
                      <img src={whatsapp} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={messenger} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={rss} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={message} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={linkicon} alt="" />
                    </Link>
                  </li>
                </ul>
                <Button>
                  <img src={share} alt="" /> Share
                </Button>
              </div>

              <div className="detail-related-post">
                <h4>Related articles</h4>
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

              <div className="what-think">
                <h2>What do you think?</h2>
                <p>1 Response</p>
                <span className="think-tag">
                  <img src={thumbup} alt="" /> Thumb Up
                </span>
                <span className="think-tag">
                  <img src={funny} alt="" /> Thumb Up
                </span>
                <span className="think-tag">
                  <img src={love} alt="" /> Thumb Up
                </span>
                <span className="think-tag">
                  <img src={wow} alt="" /> Thumb Up
                </span>
                <span className="think-tag">
                  <img src={thumbdown} alt="" /> Thumb Up
                </span>
              </div>

              <div className="have-question">
                <h2>Have a Questions?</h2>
                <p>Ask us anything</p>
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <NewsLetter />
      </div>

      <RelatedResource />
    </div>
  );
};

export default BLogDetail;
