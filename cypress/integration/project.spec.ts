describe('projects', () => {
  before(() => {
    cy.visit('/projects');
    cy.get('h1').contains('Projects').should('be.visible')
  });

  it('shows project posts', () => {
    cy.get('h2').contains('Automation').should('be.visible')
    cy.get('h2').contains('tm todos').should('be.visible')
    cy.get('h2').contains('My website').should('be.visible')
  })

  it('shows slug page correctly', () => {
    cy.get('h2').contains('tm todos').click()
    cy.getByTestId('project-title').contains('tm todos').should('be.visible')
    cy.get('article').should('not.be.empty')
  })
  
});
