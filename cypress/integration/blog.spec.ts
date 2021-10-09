describe('blog page should work', () => {
  before(() => { 
    cy.visit('/blog')
    cy.contains('Blog').should('be.visible')
  })

  it('renders titles correctly', () => {
    cy.get('h2').contains('How to rename local & remote git branches').should('be.visible')
    cy.get('h2').contains('Extending multiple classes in TypegraphQL').should('be.visible')
    cy.get('h2').contains('Deploying a full stack app with Dokku').should('be.visible')
    cy.get('h2').contains('Next JS SSR notes').should('be.visible')
    cy.get('h2').contains('forcing git merges').should('be.visible')
    cy.get('h2').contains('First blog post').should('be.visible')
})

  it('renders intros correctly', () => {
    cy.get('p').contains('A quick intro on how to easily rename branches').should('be.visible')
    cy.get('p').contains('How to extend multiple classes in Typegraphql and Typescript').should('be.visible')
    cy.get('p').contains('How to deploy a full stack app with Dokku to AWS / Digital Ocean. Cost effective deployment for Node, PostgresQL & Redis').should('be.visible')
    cy.get('p').contains('How SSR works with Next JS').should('be.visible')
    cy.get('p').contains('Isolating features into seperate branches is a really common practice for most developers. By seperating features & bug fixes you can avoid a lot of problems and keep your branches clean.').should('be.visible')
    cy.get('p').contains('Posting the first blog post').should('be.visible')

  })

  // it('should render correct posts', () => { 
  //   cy.intercept({
  //     method: 'GET',
  //     url: ''
  //   }).as('blogApiCall')

  //   cy.wait('@blogApiCall').then((res) => { 
  //     const {} = res.response.body.pageProps;
  //     console.log()
  //   })
  // })
});
