describe('projects', () => {
  before(() => {
    cy.visit('/');
  });
  it('should display projects on home page', () => {
    cy.getByTestId('project-Automation')
      .find('h2')
      .contains('Automation')
      .should('be.visible');

    cy.getByTestId('project-Automation')
      .find('p')
      .contains(
        'A repository that I created in order to automate my deployment + development environments and various dev-ops tasks'
      )
      .should('be.visible');

    cy.getByTestId('project-My website')
      .find('h2')
      .contains('My website')
      .should('be.visible');

    cy.getByTestId('project-My website')
      .find('p')
      .contains('My personal website/blog.')
      .should('be.visible');

    cy.getByTestId('project-tm todos')
      .find('h2')
      .contains('tm todos')
      .should('be.visible');

    cy.getByTestId('project-tm todos')
      .find('p')
      .contains('tmtodos - A simple full stack CRUD todo app')
      .should('be.visible');
  });
  it('should redirect to project slug page', () => {
    cy.getByTestId('project-Automation').click();
    cy.url().should('eq', 'http://localhost:3000/projects/automation');

    cy.visit('/');

    cy.getByTestId('project-My website').click();
    cy.url().should('eq', 'http://localhost:3000/projects/my-website');

    cy.visit('/');

    cy.getByTestId('project-tm todos').click();
    cy.url().should('eq', 'http://localhost:3000/projects/tm-todos');
  });
  it('should display project slug data correctly', () => {
    cy.visit('http://localhost:3000/projects/automation');

    cy.get('span').contains('Automation').should('be.visible');

    cy.get('p')
      .contains(
        'I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure. In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images, etc.).'
      )
      .should('be.visible');

    cy.visit('http://localhost:3000/projects/my-website');

    cy.get('span').contains('My website').should('be.visible');
    cy.get('p')
      .contains(
        "I have been working on my website since I started learning web development. I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can't wait to continue to improve it with the latest technologies available."
      )
      .should('be.visible');
  });
});
