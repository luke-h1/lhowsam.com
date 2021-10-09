describe('nav', () => {
  beforeEach(() => { 
    cy.visit('/')
  })
    it('should render properly', () => {
      cy.getByTestId('a').contains('Home').should('be.visible')
      cy.getByTestId('a').contains('Blog').should('be.visible')
      cy.getByTestId('a').contains('Projects').should('be.visible')

    });

    it('should redirect to correct pages', () => { 
      cy.get('a').contains('Home').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/');

      cy.get('a').contains('Blog').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/blog');
      cy.contains('h1', 'Blog').should('be.visible')

      cy.get('a').contains('Projects').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/projects');
      cy.contains('h1', 'Projects').should('be.visible')

    })
  });
