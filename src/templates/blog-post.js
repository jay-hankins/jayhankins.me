import React from 'react';
import { Link, graphql } from 'gatsby';
import Barcode from 'react-barcode';
import hash from 'hash-sum';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PGPInfo from '../components/PGPInfo';
import { rhythm, scale } from '../utils/typography';
import ThemeContext from '../context/ThemeContext';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <ThemeContext.Consumer>
          {theme => (
            <ReactCSSTransitionReplace
              transitionName="cross-fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <div key={theme.darkMode}>
                <Barcode
                  value={hash(post.frontmatter.title)}
                  displayValue={false}
                  height={25}
                  width={1.5}
                  margin={0}
                  background={theme.darkMode ? '#2a2b2d' : '#ffffff'}
                  lineColor={!theme.darkMode ? '#2a2b2d' : '#F2A300'}
                />
              </div>
            </ReactCSSTransitionReplace>
          )}
        </ThemeContext.Consumer>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <PGPInfo slug={post.fields.slug} />
        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 165)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        published
      }
    }
  }
`;
