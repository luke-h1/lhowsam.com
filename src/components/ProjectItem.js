import React from 'react';
const ProjectItemGithubOnly = (props) => {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={props.image} alt="" />
      </div>
      <h3 className="project__card-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <div className="icon-container">
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
          href="{props.href}"
        >
          <FaGithub className={iconStyles} />
        </a>
      </div>
    </div>
  );
};

const ProjectItemGithubBrowser = (props) => {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={props.image} alt="" />
      </div>
      <h3 className="project__card-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <div className="icon-container">
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
          href="{props.githubHref}"
        >
          <FaGithub className={iconStyles} />
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          alt=""
          href="{props.browserHref}"
        >
          <GoBrowser className={iconStyles} />
        </a>
      </div>
    </div>
  );
};
