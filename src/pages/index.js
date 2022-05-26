import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled'
import GlobalStyle from '../components/common/GlobalStyle'
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryList from '../components/main/CategoryList'
import './index.css';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const CATEGORY_LIST = {
  All: 7,
  Web: 4,
  Etc: 3,
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts);
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const curFilter = window.location.href.split("category=")[1];
  const category = curFilter ? curFilter : "All";
  const filterFunc = category === 'All' ? ()=>true : (post)=>post.frontmatter.tag === category;

  return (
    <Container>
      <GlobalStyle />
      <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <CategoryList categoryList={CATEGORY_LIST} />
      <ol style={{ listStyle: `none` }} className="post-list">
      
        {posts.filter(filterFunc).map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug} className="post-element">
              <Link to={post.fields.slug} itemProp="url">
              <article
                className="item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="item__header">
                  <h2 className="headline">                    
                      <span itemProp="headline">{title}</span>                      
                  </h2>
                  <small className="date">{post.frontmatter.date}</small>
                </header>
                <section className="item__section">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
    </Container>
    
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tag
        }
      }
    }
  }
`
