describe('about page', () => {
  it('should display the about page', () => {
    cy.visit('/about');
    cy.get('h1').should('contain', 'About').and('be.visible');
    cy.get('p').should('be.visible');
  });
});
