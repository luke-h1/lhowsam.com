describe('blog page should work', () => {
  before(() => {
    cy.visit('/blog');
    cy.get('header').find('h1').contains('Blog').should('be.visible')

  });

  it('shows blog posts', () => {
    for (let i = 0; i < 8; i += 1) {
      cy.get('h2').eq(i).should('be.visible').and('not.be.empty');
    }
  });

  it('shows slug page correctly', () => {

    let links: string[] = []

    for (let i = 0; i < 8; i += 1) {
      
      cy.get('article > header').eq(i).find('a').should('have.attr', 'href').then((l) => {
        links.push(`${Cypress.config().baseUrl}${l}`)
        cy.visit(links[i])
        cy.get('h1').should('be.visible').and('not.be.empty');
        cy.getByTestId('blog-title').should('be.visible').and('not.be.empty')
        cy.get('img').should('be.visible')
        cy.get('article').should('be.visible').and('not.be.empty')
        cy.visit('/blog');
        cy.get('header').find('h1').contains('Blog').should('be.visible')
      })

    }
  })
});
