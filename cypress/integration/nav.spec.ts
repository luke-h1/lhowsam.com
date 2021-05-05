describe('nav links work', () => {
  context('1080p res', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
  });
  it('should navigate to about page', () => {
    cy.visit('/');
    cy.contains('About').should('exist').click();
    cy.url().should('include', '/about');
  });

  it('should navigate to / from about page', () => {
    cy.visit('/');
    cy.contains('About').should('exist').click();
    cy.url().should('include', '/about');
    cy.contains('Home').should('exist').click();
  });
});
