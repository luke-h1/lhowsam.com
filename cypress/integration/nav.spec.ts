describe('nav contains correct text', () => { 
    context('1080p res', () => { 
        cy.viewport(1920, 1080)
    before(() => { 
        cy.visit('/')
    })

    it('should contain correct text', () => { 
        cy.get('[data-testid=nav-Home]').contains('Home').should('be.visible')
        cy.get('[data-testid=nav-Blog]').contains('Blog').should('be.visible')

        cy.get('[data-testid=nav-Projects]').contains('Projects').should('be.visible')

        cy.get('[data-testid=nav-twitter]').should('be.visible')
        cy.get('[data-testid=nav-github]').should('be.visible')

    })
  })
})
