describe('projects', () => {
  before(() => {
    cy.visit('/projects');
    cy.get('h1').contains('Projects').should('be.visible')
  });

  it('shows project posts & project slug pages correctly', () => {
    let links: string[] = []

    for (let i = 0; i < 3; i += 1) {
      cy.get('a').eq(i).should('be.visible').and('not.be.empty');
      cy.get('[data-testid="project-link"]').eq(i).should('have.attr', 'href').then((l) => {
        links.push(`${Cypress.config().baseUrl}${l}`)
        cy.visit(links[i])
        cy.get('h1').should('be.visible').and('not.be.empty');
        cy.get('article').should('be.visible').and('not.be.empty')
        cy.visit('/projects');
        cy.get('h1').contains('Projects').should('be.visible')
      })
    }
  })
});
