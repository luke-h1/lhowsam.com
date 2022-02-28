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

  it('shows slug page correctly', () => {
    cy.get('h2').contains('Storify').click()
    cy.getByTestId('project-title').contains('Storify').should('be.visible')
    cy.get('article').should('not.be.empty')
    cy.get('small').contains('GraphQL').should('be.visible')
  })
  
});
