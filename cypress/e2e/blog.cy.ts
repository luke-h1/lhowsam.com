describe('blog page should work', () => {
  before(() => {
    cy.visit('/blog');
    cy.get('h1').contains('Blog').should('be.visible')
  });

  it('shows listing of blog posts & slug page correctly', () => {
    const links: string[] = []

    for (let i = 0; i < 8; i += 1) {
      cy.get('h2').eq(i).should('be.visible').and('not.be.empty');
      cy.get('p').eq(i).should('be.visible').and('not.be.empty');
      cy.get('ul > li').find('a').should('be.visible').and('not.be.empty')
      cy.get('ul > li').find('a').should('have.attr', 'href')
      cy.get('[data-testid="post-title"]').eq(i).should('have.attr', 'href').then((l) => {
        links.push(`${Cypress.config().baseUrl}${l}`)
        cy.visit(links[i])
        cy.get('h1').should('be.visible').and('not.be.empty');
        cy.get('img').should('be.visible')
        cy.get('article').should('be.visible').and('not.be.empty')
        cy.visit('/blog');
        cy.get('h1').contains('Blog').should('be.visible')
      })
    }
  })
});
