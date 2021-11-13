import React from "react";
import Layout from "../components/layout/layout";
import BLogDetail from "../components/blog/blogdetail";
import "../components/blog/blogdetail.css";

const BlogDetailPage = () => {
  return (
    <Layout>
      <div className="blog-detail-page">
        <BLogDetail />
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
