/* eslint-disable */
import React from 'react'
import CardItem from '../../templates/CardItem/CardItem';


const ProjectPreview = ({ Project }) => (
  <>
  <CardItem
    path={Project.slug}
    data-category={Project.label}
    fluid={Project.image.sharp.fluid} alt={Project.title}
    text={Project.text}  
  />




        {/* TODO: LOOP THRU & SHOW CARD ITEM FOR EACH PROJECT  */}
        
        {/* TODO: CREATE JSON OBJ TO LOOP THRU AND CREATE A PAGE BASED ON RESULTS */}
  </>
)

export default ProjectPreview
