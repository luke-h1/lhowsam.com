/* eslint-disable */
import React from 'react'
import CardItem from '../../templates/CardItem/CardItem';
import { Link } from 'gatsby';
import {
  CardItem1,
  CardLink,
  CardFigure,
  CardImage,
  CardText,
  CardItemInfo,
} from './ProjectPreviewElements';

const ProjectPreview = ({project}) => {
return (
  <>
     <CardItem1>
        <CardLink className="cards__item__link" to={project.slug}>
          <CardFigure data-category={project.technologies}>
            <CardImage fluid={project.image} alt={project.title}  style={{ color: '#000' }} />
          </CardFigure>
          <CardItemInfo>
            <CardText>{project.title}</CardText>
          </CardItemInfo>
        </CardLink>
      </CardItem1>
  </>
)
}
export default ProjectPreview
