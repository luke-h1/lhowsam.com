describe('navbar', () => {
  before(() => {
    cy.visit('/');
  });

  it('should navigate correctly without errors', () => {
    cy.get('nav').should('be.visible');

    // 1st link (about)
    cy.contains('About').should('be.visible').click();
    cy.url().should('include', '/about');
    cy.wait(800);
    cy.get('h1').contains('About').should('be.visible');
    cy.go('back');
    cy.wait(500);
    cy.get('p').contains('I currently work as a Software Engineer.').should('be.visible');
    cy.url().should('include', '/');

    // 2nd link (projects)
    cy.contains('Projects').should('be.visible').click();

    cy.get('h1').contains('Projects').should('be.visible');
    cy.url().should('include', '/projects');
    cy.go('back')
    cy.wait(500);
    cy.url().should('include', '/');
    cy.get('h2').contains('Highlighted projects').should('be.visible')

    cy.contains('Projects').should('be.visible').click();


    // 3rd link (Blog)
    cy.go('back');
    cy.wait(500);
    cy.get('h2').contains('Highlighted projects').should('be.visible')
    cy.url().should('include', '/');
    cy.contains('Blog').should('be.visible').click();
    cy.url().should('include', '/blog');
    cy.get('h1').contains('Blog').should('be.visible');

  })
})