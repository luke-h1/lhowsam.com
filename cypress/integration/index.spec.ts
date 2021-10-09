describe('index', () => {
  beforeEach(() => { 
    cy.visit('/')
  })
  it('should display correct index text (1)', () => {
    cy.getByTestId('hey').contains(
        'Hey 👋, I\'m Luke'
      ).should('be.visible')
    });
    it('should display correct index text (2)', () => {
      cy.get('p').contains(
        'Hey I\'m Luke, I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment. I\'m also a developer who likes working with React & Node.js.'
      ).should('be.visible')
    });

    it('should display contact section', () => { 
      cy.get('h2').contains('Get in touch').should('be.visible')
      cy.get('p').contains('Do you have a project or opportunity you\'d like to discuss?').should('be.visible')
    })
  });
