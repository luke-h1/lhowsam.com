describe('index', () => {
  before(() => {
    cy.visit('/');
  });
  it('should display heading', () => {
    cy.get('h1').contains("Hey, I'm Luke").should('be.visible');
    cy.get('span').contains('👋').should('be.visible');
  });
  it('should display intro paragraph', () => {
    cy.get('p').contains("I'm a ").should('be.visible');
    cy.get('strong').contains('software tester');
    cy.get('p').contains('and').should('be.visible');
    cy.get('strong').contains('developer').should('be.visible');
    cy.get('p')
      .contains(
        'I like building and testing projects that are scalable, performant & user friendly. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment'
      )
      .should('be.visible');
  });
});
