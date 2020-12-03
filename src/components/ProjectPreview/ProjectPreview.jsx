/* eslint-disable */
import React from 'react'
import CardItem from '../../templates/CardItem/CardItem';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const ProjectPreview = ({ Project }) => {

return (
  <>
  <CardItem
    path={Project.slug}
    data-category={Project.label}
    fluid={Project.image.sharp.fluid} alt={Project.title}
    text={Project.text}  
  />
  </>
)
}
export default ProjectPreview
