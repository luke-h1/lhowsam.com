describe('snippets', () => {
  before(() => {
    cy.visit('/code-snippets')
  })
  it('should display code snippets correctly', () => {
    cy.get('h2').contains('Captialize first letter of a string in JSX').should('be.visible')

    cy.get('h2').contains('Update user ID in postgreSQL ').should('be.visible')
  })
})