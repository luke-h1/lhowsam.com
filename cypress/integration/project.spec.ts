describe('project page', () => {
  before(() => { 
    cy.visit('/projects')
  })

  it('should render properly', () => {
    cy.contains('h1', 'Projects').should('be.visible');
  });

  it('should render lhowsam project', () => { 
    cy.getByTestId('project-title').should('be.visible').contains('My Website')
    cy.contains('I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can\'t wait to continue to improve it with the latest technologies available').should('be.visible')
  })

  it('should render tmtodos project', () => { 
    cy.getByTestId('project-title').should('be.visible').contains('tmtodos.me - full stack todo app')
    cy.contains('tmtodos is a full stack todo app.This was the first fullstack app I created. This project was an eye opener on which technologies I most like working with (building full stack applications is really satisifying) and the importance of picking the correct tech-stack to start a project with. While simple in the functionality it exposes to a user, I learnt a lot about technologies that I wasn\'t very comfortable with at the start of this project (uploading & deleting s3 images, more complex SQL queries etc.)').should('be.visible')
  })

  it('should render Automation project', () => {
    cy.getByTestId('project-title').should('be.visible').contains('Automation')
    cy.contains('I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)').should('be.visible')
  })
});
