describe('blog page should work', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

  it('should render properly', () => {
    cy.visit('/blog');
    cy.contains('Blog').should('be.visible')
    cy.contains('Lessons learned, thoughts on various tech & articles on what I\'m building').should('be.visible')
  });
});
