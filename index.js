import React from "react";
import AllPost from "../components/blog/allpost";
import Layout from "../components/layout/layout";
import "../components/blog/blog.css";
import CallToAction from "../components/blog/calltoaction";
import FeaturedPost from "../components/blog/featuredpost";

const IndexPage = () => {
  return (
    <Layout>
      <div className="index-page">
        <FeaturedPost />
        <AllPost />
        <CallToAction />
      </div>
    </Layout>
  );
};

export default IndexPage;
