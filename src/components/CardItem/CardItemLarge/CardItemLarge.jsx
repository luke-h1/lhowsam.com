import React from 'react';
import { Link } from 'react-router-dom';
import './CardItemLarge.scss';
import { FaGithub } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
const CardItem = (props) => {
  return (
    <>
      <div className="project-large-wrapper">
        <div className="card">
          <h1 className="item-title">{props.title}</h1>
          <div className="container">
            <img
              src={props.src}
              alt={props.alt}
              className="project-large-image"
            />

            <div className="icon-container">
              <a
                className="github-link"
                href={props.github}
                target="_blank"
                rel="noreferrer"
                aria-label='Github'

              >
                {props.github ? <FaGithub /> : null}
              </a>
              <a
                className="site-link"
                href={props.site}
                target="_blank"
                rel="noreferrer"
                aria-label='Live site link'
              >
                {props.site ? <IoMdBrowsers /> : null}
              </a>
            </div>
            <p>{props.desc}</p>
          </div>
          <Link to="/projects" className="project-large-link">
            Back to projects
          </Link>
        </div>
      </div>
    </>
  );
};
export default CardItem;
