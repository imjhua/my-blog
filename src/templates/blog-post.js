import React, { useEffect } from "react"
import { graphql } from "gatsby"
import TableOfContents from "../components/TableOfContents";

import Post from "@lekoarts/gatsby-theme-minimal-blog/src/components/post"

export default function BlogPost({
  data: {
    markdownRemark: { html, tableOfContents },
    post
  }
}) {

  useEffect(()=>{
    const target = document.querySelector('#skip-nav')
    if(target){
      console.log(target);
      target.innerHTML = html
    }
  },[html])

  return (
    <>
      <TableOfContents content={tableOfContents} />
      <Post data={{post}} />
    </>
  )
}

/* SEE: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/post.tsx */
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents
    }
    post(slug: { eq: $slug }) {
      slug
      title
      date
      tags {
        name
        slug
      }
      description
      canonicalUrl
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`

