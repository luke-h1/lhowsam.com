describe('blog page should work', () => {
  before(() => {
    cy.visit('/blog');
    cy.get('header').find('h1').contains('Blog').should('be.visible')

  });

  it('shows blog posts', () => {
    for (let i = 0; i < 7; i += 1) {
      cy.get('h2').eq(i).should('be.visible').and('not.be.empty');
    }
  });

  it('shows slug page correctly', () => {
    cy.get('h2').contains('Forcing git merges').click()
    cy.getByTestId('blog-title').contains('Forcing git merges').should('be.visible')
    cy.get('img').should('be.visible')

    cy.get('article').should('not.be.empty')
  })
});
