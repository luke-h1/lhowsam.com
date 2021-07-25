describe('blog page should work', () => {
    context('1080p res', () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
      });
    });
  
    it('should render properly', () => {
      cy.visit('/');
      cy.get('[data-testid=nav-Home]').contains('Home').should('be.visible')
      cy.get('[data-testid=nav-Blog]').contains('Blog').should('be.visible')

      cy.get('[data-testid=nav-Projects]').contains('Projects').should('be.visible')

      cy.get('[data-testid=nav-twitter]').should('be.visible')
      cy.get('[data-testid=nav-github]').should('be.visible')

    });
  });
