import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import "./case-study.css";

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds content data
  const { frontmatter, html } = markdownRemark

  const tags = frontmatter.tags.map((tag) => (
    <li class="post__tag">{tag}</li>
  ));

  return (
    <Layout>
      <div>
        <span>{frontmatter.date}</span>
        {frontmatter.tags && 
          // <span class="tag-separator">/</span>
          <ul class="post__tag-list">
            {tags}
          </ul>
        }
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.intro}</h2>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        path
        title
        intro
        tags
      }
    }
  }
`