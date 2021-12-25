describe('blog page should work', () => {
  before(() => {
    cy.visit('/blog');
    cy.get('header').find('h1').contains('Blog').should('be.visible')

  });

  it('shows blog posts', () => {
    cy.get('h2').contains('Full stack deploy with Dokku').should('be.visible');
    cy.get('h2').contains('Extending multiple classes in TypegraphQL').should('be.visible');
    cy.get('h2').contains('Next.js SSR notes').should('be.visible');
    cy.get('h2').contains('Forcing git merges').should('be.visible');
    cy.get('h2').contains('First blog post').should('be.visible');
  });

  it('shows slug page correctly', () => {
    cy.get('h2').contains('Forcing git merges').click()
    cy.getByTestId('blog-title').contains('Forcing git merges').should('be.visible')

    cy.get('article').should('not.be.empty')
  })
});
