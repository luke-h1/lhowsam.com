describe('index intro texts', () => {
  context('1080p res', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    it('should respond with the index page', () => {
      cy.visit('/');
    });
    it('should display correct index text (1)', () => {
      cy.get('[data-testid=i-intro-1]').contains(
        'I have experience working in agile environments, testing features, various frontend languages, technologies & tooling.'
      );
    });
    it('should display correct index text (2)', () => {
      cy.get('[data-testid=i-intro-2]').contains(
        'At the moment my favorite technologies are: React, Typescript, GraphQL, Node, PostgreSQL & styled-components'
      );
    });

  });
});
