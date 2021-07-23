describe('index intro texts', () => {
  context('1080p res', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    before(() => { 
      cy.visit('/')
    })
    it('should display correct index text (1)', () => {
      cy.get('[data-testid=hey]').contains(
        'Hey 👋, I\'m Luke'
      );
    });
    it('should display correct index text (2)', () => {
      cy.get('[data-testid=short-intro]').contains(
        'I like building and testing projects that are scalable, performant & user friendly'
      );
    });
    it('should display correct index text (3)', () => {
      cy.get('[data-testid=short-intro2]').contains('I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment')
    })
    it('should display correct skills', () => { 
      cy.get('[data-testid=skill-1]').contains('React.js')
      cy.get('[data-testid=skill-2]').contains('Next.js')
      cy.get('[data-testid=skill-3]').contains('GraphQL')
      cy.get('[data-testid=skill-4]').contains('Docker')
      cy.get('[data-testid=skill-5]').contains('Node.js')
      cy.get('[data-testid=skill-6]').contains('Express.js')
      cy.get('[data-testid=skill-7]').contains('Manual & automated testing')
    })
  });
});
