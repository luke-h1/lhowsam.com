describe('blog page should work', () => {
  it('should render properly', () => {
    cy.visit('/blog');
    cy.contains('Blog').should('be.visible')
    cy.contains('Lessons learned, thoughts on various tech & articles on what I\'m building').should('be.visible')
  });
});
