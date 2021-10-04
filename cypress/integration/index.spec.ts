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
      cy.getByTestId('short-intro').contains(
        'I like building and testing projects that are scalable, performant & user friendly'
      ).should('be.visible')
    });
    it('should display correct index text (3)', () => {
      
      cy.getByTestId('short-intro2').contains('I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment').should('be.visible')
    })

    it('should display contact section', () => { 
      cy.get('h2').contains('Get in touch').should('be.visible')
      cy.get('p').contains('Do you have a project or opportunity you\'d like to discuss?').should('be.visible')
    })
  });
