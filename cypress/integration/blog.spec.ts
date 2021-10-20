describe('blog page should work', () => {
  before(() => {
    cy.visit('http://localhost:3000/blog');
    cy.get('h1').contains('blog').should('be.visible');
  });

  it('shows all blog posts', () => {
    cy.get('h2').contains('Full stack deploy with Dokku').should('be.visible');
    cy.get('h2').contains('Next.js SSR notes').should('be.visible');
    cy.get('h2').contains('Forcing git merges').should('be.visible');
    cy.get('h2').contains('First blog post').should('be.visible');
  });
});
