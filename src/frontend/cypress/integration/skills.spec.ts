describe('skills', () => {
  before(() => {
    cy.visit('/');
  });
  it('should display skill title correctly', () => {
    cy.getByTestId('skill-item-title')
      .contains('Frontend')
      .should('be.visible');
    cy.getByTestId('skill-item-title').contains('Backend').should('be.visible');
    cy.getByTestId('skill-item-title').contains('Other').should('be.visible');
    cy.getByTestId('skill-item-title').contains('Testing').should('be.visible');
  });
  it('should display frontend skill items correctly', () => {
    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('HTML, CSS & SCSS')
      .should('be.visible');

    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('Javascript')
      .should('be.visible');

    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('Lerna / Yarn workspaces')
      .should('be.visible');

    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('Typescript')
      .should('be.visible');
    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('React')
      .should('be.visible');

    cy.getByTestId('skill-item-Frontend')
      .find('li')
      .contains('Next.js')
      .should('be.visible');
  });
  it('should display backend skill items correctly', () => {
    cy.getByTestId('skill-item-Backend')
      .find('li')
      .contains('Node.js')
      .should('be.visible');

    cy.getByTestId('skill-item-Backend')
      .find('li')
      .contains('Express.js')
      .should('be.visible');

    cy.getByTestId('skill-item-Backend')
      .find('li')
      .contains('GraphQL')
      .should('be.visible');
    cy.getByTestId('skill-item-Backend')
      .find('li')
      .contains('PostgreSQL')
      .should('be.visible');
  });
  it('should display other skill items correctly', () => {
    cy.getByTestId('skill-item-Other')
      .find('li')
      .contains('Git & Github')
      .should('be.visible');
    cy.getByTestId('skill-item-Other')
      .find('li')
      .contains('Docker')
      .should('be.visible');
    cy.getByTestId('skill-item-Other')
      .find('li')
      .contains('AWS')
      .should('be.visible');
    cy.getByTestId('skill-item-Other')
      .find('li')
      .contains('DigitalOcean')
      .should('be.visible');
  });
  it('should display testing skill items correctly', () => {
    cy.getByTestId('skill-item-Testing')
      .find('li')
      .contains('Manual / automated testing')
      .should('be.visible');

    cy.getByTestId('skill-item-Testing')
      .find('li')
      .contains('Selenium')
      .should('be.visible');

    cy.getByTestId('skill-item-Testing')
      .find('li')
      .contains('k6')
      .should('be.visible');

    cy.getByTestId('skill-item-Testing')
      .find('li')
      .contains('Cypress')
      .should('be.visible');
  });
});
