import React from "react";
import {graphql} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogpostLayout = ({data}) => {
  //const post = data.markdownRemark;
  const post = data.wordpressPost;
  return (
    <div>
      <Header/>
      <div className="container">
        <div className = "row justify-content-md-center">
          <div className="col">
          {
            // <h1>{post.frontmatter.title}</h1>
            // <div dangerouslySetInnerHTML={{__html: post.html}}></div>
          }
          <h1 dangerouslySetInnerHTML={{__html: post.title}}></h1>
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>

            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    # markdownRemark(fields: {slug: {eq: $slug}}) {
    #   html
    #   frontmatter {
    #     title
    #   }
    # }
    wordpressPost( slug: { eq: $slug }) {
      content
      title
    }
  }
`