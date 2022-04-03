describe('projects', () => {
  before(() => {
    cy.visit('/projects');
    cy.get('h1').contains('Projects').should('be.visible')
  });

  it('shows project posts', () => {
    for (let i = 0; i < 3; i += 1) {
      cy.get('h2').eq(i).should('be.visible').and('not.be.empty');
    }
  })
});
