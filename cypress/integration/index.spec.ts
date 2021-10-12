describe('index', () => {
  beforeEach(() => { 
    cy.visit('/')
  })
  it('should display correct index text (1)', () => {
    cy.get('h1').contains(
      'Hey, I\'m Luke 👋'
      ).should('be.visible')
    });
  });
