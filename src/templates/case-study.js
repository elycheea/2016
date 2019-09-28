import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import CaseHeader from "../components/case-header/case-header";

import "./case-study.css";

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds content data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <CaseHeader
        date={frontmatter.date}
        tags={frontmatter.tags}
        title={frontmatter.title}
        intro={frontmatter.intro}
      ></CaseHeader>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        intro
        tags
      }
    }
  }
`