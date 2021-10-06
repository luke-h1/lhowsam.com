describe('nav', () => {
  beforeEach(() => { 
    cy.visit('/')
  })
    it('should render properly', () => {
      cy.getByTestId('nav-Home').contains('Home').should('be.visible')
      cy.getByTestId('nav-Blog').contains('Blog').should('be.visible')

      cy.getByTestId('nav-Projects').contains('Projects').should('be.visible')

      cy.getByTestId('nav-github').should('be.visible')

    });

    it('should redirect to correct pages', () => { 
      cy.getByTestId('nav-Home').contains('Home').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/');

      cy.getByTestId('nav-Blog').contains('Blog').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/blog');
      cy.contains('h1', 'Blog').should('be.visible')

      cy.getByTestId('nav-Projects').contains('Projects').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/projects');
      cy.contains('h1', 'Projects').should('be.visible')

    })
  });
