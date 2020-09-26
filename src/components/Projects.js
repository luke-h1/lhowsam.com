import React from 'react';
import img1 from '../assets/images/img-1.jpeg';
import img2 from '../assets/images/img-2.jpeg';
import img3 from '../assets/images/img-3.jpeg';
import img4 from '../assets/images/img-4.jpeg';
import img5 from '../assets/images/img-5.jpeg';
import img6 from '../assets/images/img-6.jpeg';

const Projects = () => {
  return (
    <div>
      <section className='s1 s1-alt'>
        <div className='main-container'>
          <h3 className='h3-center'>My Projects</h3>
        </div>
        <div className='container'>
          <img className='thumbnail' src={img1} alt='' />
          <div className='post-preview'>
            <h6 className='post-title'>Quotes App</h6>
            <p className='post-intro'>
              In this project I made a quotes app that pulls data from
              <a href='https://github.com/RocktimSaikia/anime-chan'> this</a>
              API with Vanilla javascript and bootstrap. This was a really fun
              API to work with and made the development of this app enjoyable.
            </p>
            <div className='icon-container'>
              <a
                className='social-list__link'
                href='https://github.com/luke-h1/anime-quotes-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github fa-2x' aria-hidden='true'></i>
              </a>
              <a
                className='social-list__link'
                href='https://anime-quotes-app.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-chrome fa-2x' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='container'>
          <img className='thumbnail' src={img2} alt='' />
          <h6 className='post-title'>Todo App</h6>
          <p className='post-intro'>
            In this project, I built a Todo App made with Vanilla javascript &
            boostrap. I enjoyed solving the issues that occured during the
            development of this app (DOM manipulation issues etc.)
          </p>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/vanilla-todo-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
            <a
              className='social-list__link'
              href='https://vanilla-todo-app.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-chrome fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>

        <div className='container'>
          <img className='thumbnail' src={img3} alt='' />
          <h6 className='post-title'>Automation</h6>
          <p className='post-intro'>
            I am a huge advocate for infrastructure automation as this allows
            teams to focus on innovating new features and solving new problems
            rather than being backlogged with maintaining infrastructure. In
            this project I made Ansible playbooks & Bash scripts that automate
            the setup of Linux & Mac OS X workstations & servers
          </p>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/Automation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
        <div className='container'>
          <img
            className='thumbnail'
            src={img4}
            alt=''
            rel='noopener noreferrer'
          />
          <h6 className='post-title'>form validator</h6>
          <p className='post-intro'>
            In this project I built a form validator that uses built in
            javascript regular expressions to validate name, email, postcode &
            phone numbers.
          </p>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/Automation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
        <div className='container'>
          <img
            className='thumbnail'
            src={img5}
            alt=''
            rel='noopener noreferrer'
          />
          <h6 className='post-title'>Weather App</h6>
          <p className='post-intro'>
            In this project I built Weather App with bootstrap css & vanilla
            Javascript. It pulls data from{' '}
            <a href='https://www.weatherapi.com/'>This</a> API. In the future I
            plan to deploy an express server to heroku in order to deploy this
            App and hide my API key on the frontend. You can run this project
            locally by requesting an API key from{' '}
            <a href='https://www.weatherapi.com/'>here</a> and running the npm
            package lite-server locally
          </p>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/Automation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>

        <div className='container'>
          <img className='thumbnail' src={img6} alt='' />
          <h6 className='post-title'>Cocktail recipe App</h6>
          <p className='post-intro'>
            In this project I built a cocktail recipe app that pulls data from{' '}
            <a href='https://www.thecocktaildb.com/'> this</a>
            API. This was a really fun project and was the first project where I
            used higher order array methods to get multiple results from an API
          </p>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/Automation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
