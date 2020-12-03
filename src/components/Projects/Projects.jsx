/* eslint-disable */
import React from 'react';
import Image1 from '../../../static/Coffee-jon-tyson.jpeg';
import Image2 from '../../../static/Drink-carson.jpeg';
import Image3 from '../../../static/pink-pattern-pawel.jpeg';
import Image4 from '../../../static/pattern-ahmad-dirini.jpeg';
import Image5 from '../../../static/Shop-albert-renn.jpeg';
import CardItem from '../../templates/CardItem/CardItem';
import ProjectData from '../../data/projects.json';
import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';


// TODO: CONVERT THIS TO USE GRAPHQL INSTEAD OF PROPS 

const Projects = () => {
  return (
  <>
    <ProjectWrapper>
      <ProjectTitle>My Projects</ProjectTitle>
      <CardContainer>
        <CardWrap>
          {ProjectData.map((project) => (
            <CardItem src={project.image} text={project.title} label={project.techonologies} path={project.slug} /> 
          ))}
       
      
        </CardWrap>
      </CardContainer>
    </ProjectWrapper>
  </>
);
}
export default Projects;
