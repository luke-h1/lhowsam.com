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
    it('should display correct skills', () => { 
      cy.getByTestId('skill-1').contains('React.js').should('be.visible')
      cy.getByTestId('skill-2').contains('Next.js').should('be.visible')
      cy.getByTestId('skill-3').contains('GraphQL').should('be.visible')
      cy.getByTestId('skill-4').contains('Docker').should('be.visible')
      cy.getByTestId('skill-5').contains('Node.js').should('be.visible')
      cy.getByTestId('skill-6').contains('Express.js').should('be.visible')
      cy.getByTestId('skill-7').contains('Manual & automated testing').should('be.visible')
    })
    it('should display contact section', () => { 
      cy.get('h2').contains('Get in touch').should('be.visible')
      cy.get('p').contains('Do you have a project or opportunity you\'d like to discuss?').should('be.visible')
    })
  });
