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
        'A repository that I created in order to automate my deployment + development environments and various dev-ops tasks',
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
  it('should display project slug data correctly', () => {
    cy.visit('/projects/automation');

    cy.get('span').contains('Automation').should('be.visible');

    cy.visit('/projects/my-website');

    cy.get('span').contains('My website').should('be.visible');
  });
});
