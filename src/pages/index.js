import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import "./index.css";

const IndexPage = () => (
  <StaticQuery
  query={graphql`
    query IndexTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render = {data => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="title--display">{data.site.siteMetadata.title}</h1>
      <div className="body--display">
        <p className="tagline">
          <span className="rwd-line">A designer who loves code, </span>
          <span className="rwd-line">or a developer who loves design.</span>
        </p>
        <p>+ Learn more</p>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )}
/>
)

export default IndexPage
