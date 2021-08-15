describe('project page', () => {
  before(() => { 
    cy.visit('/projects')
  })

  it('should render properly', () => {
    cy.visit('/projects');
    cy.contains('h1', 'Projects').should('be.visible');
  });

  it('should render lhowsam project', () => { 
    cy.getByTestId('project-title').should('be.visible').contains('My Website')
    cy.contains('I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can\'t wait to continue to improve it with the latest technologies available').should('be.visible')
  })

  it('should render Airbnb clone project', () => { 
    cy.getByTestId('project-title').should('be.visible').contains('Airbnb clone - full stack clone of Airbnb')
    cy.contains('In this project I built a clone of Airbnb with Next.js for the frontend & GraphQL + Typescript for the api. While this project is not a 1 to 1 match of the actual Airbnb, I learnt a lot about technologies that I wasn\'t very comfortable with at the start of this project (uploading & deleting s3 images, more complex SQL queries etc.)').should('be.visible')
  })

  it('should render Automation project', () => {
    cy.getByTestId('project-title').should('be.visible').contains('Automation')
    cy.contains('I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)').should('be.visible')
  })
});
