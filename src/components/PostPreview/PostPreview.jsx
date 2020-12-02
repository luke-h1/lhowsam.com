/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReadLink from '../../components/utils/ReadLink/ReadLink';
import Image from 'gatsby-image'
const StyledArticle = styled.article`
  margin-top: 0;
  padding-bottom: 1rem;
  :first-of-type {
   margin-top: 1rem;
      }  

   
`

const Wrap = styled.div`
`

const styledLink = styled(Link)`
  margin: 1rem 1rem 0 0;
        width: 100px;
`

const StyledImage = styled(Image)`
    max-height: 200px;
    border-radius: 10px;
    margin-top: 0;

  * {
    margin-top: 0;
  }
`

  
const StyledP = styled.p`
`

const PostPreview = ({ post }) => (
  <>
    <StyledArticle>
      <Wrap>
      <styledLink to={post.slug}>
        <StyledImage
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </styledLink>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <StyledP>{post.excerpt}</StyledP>
      <ReadLink to={post.slug}>Read this post </ReadLink>
      </Wrap>
    </StyledArticle>
  </>
)

export default PostPreview
