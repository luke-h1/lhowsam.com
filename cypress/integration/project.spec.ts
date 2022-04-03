describe('projects', () => {
  before(() => {
    cy.visit('/projects');
    cy.get('h1').contains('Projects').should('be.visible')
  });

  it('shows project posts', () => {
    let links: string[] = []

    for (let i = 0; i < 3; i += 1) {
      
      cy.get('article > header').eq(i).find('a').should('have.attr', 'href').then((l) => {
        links.push(`http://localhost:3000${l}`)
        cy.visit(links[i])
        cy.get('h1').should('be.visible').and('not.be.empty');
        cy.getByTestId('project-title').should('be.visible').and('not.be.empty')
        cy.get('article').should('be.visible').and('not.be.empty')
        cy.visit('/projects');
        cy.get('header').find('h1').contains('Projects').should('be.visible')
      })

    }
  })
});
