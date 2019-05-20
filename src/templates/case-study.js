import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds content data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        path
        title
      }
    }
  }
`