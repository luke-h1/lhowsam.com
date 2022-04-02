describe('projects', () => {
  before(() => {
    cy.visit('/projects');
    cy.get('h1').contains('Projects').should('be.visible')
  });

  it('shows project posts', () => {
    cy.get('h2').contains('Automation').should('be.visible')
    cy.get('h2').contains('Storify').should('be.visible')
    cy.get('h2').contains('My website').should('be.visible')
  })
});
