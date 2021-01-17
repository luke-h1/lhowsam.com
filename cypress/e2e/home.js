describe('home', () => {
    beforeEach(() => {
      cy.visit('/').waitForRouteChange()
    })
  
    it('should have the hero content', () => {
      cy.findAllByText(/hey I'm Luke/i)
      cy.findByText(/I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies/i)
    })
  
    it('should have recent projects', () => {
      cy.findByText(/Projects/i)
    })
  
    it('should have recent blog posts', () => {
      cy.findByText(/forcing git merges/i)

    })

  })
  