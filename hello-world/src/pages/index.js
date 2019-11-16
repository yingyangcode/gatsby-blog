import React from "react"

import {graphql} from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default ({data}) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
    {
      // data.allMarkdownRemark.nodes.map((node) => (
      //   <Post 
      //     image={node.frontmatter.image}
      //     title={node.frontmatter.title}
      //     excerpt={node.excerpt}
      //     readMore={node.fields.slug}
      //   />
      // ))
      data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.jetpack_featured_media_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))
    }
      
    </PrimaryLayout>
  )
}

export const query=graphql`
# {
#   allMarkdownRemark {
#     nodes {
#       frontmatter{
#         title
#         date
#         keywords
#         image
#       }
#       excerpt
#       html
#       fields {
#         slug
#       }
#     }
#   }
# }
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      jetpack_featured_media_url
    }
  }
}
`
