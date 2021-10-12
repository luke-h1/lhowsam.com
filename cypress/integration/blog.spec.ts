describe('blog page should work', () => {
  before(() => { 
    cy.visit('/blog')
    cy.contains('Blog Posts').should('be.visible')
  })

  it('renders titles correctly', () => {
    cy.get('h3').contains('Full stack deploy with Dokku').should('be.visible')
    cy.get('h3').contains('Next.js SSR notes').should('be.visible')
    cy.get('h3').contains('Forcing git merges').should('be.visible')
    cy.get('h3').contains('First blog post').should('be.visible')
})

  it('renders intros correctly', () => {
    cy.get('p').contains('How to deploy a full-stack app with Dokku to AWS / Digital Ocean. Cost-effective deployment for Node, PostgreSQL & Redis').should('be.visible')

    cy.get('p').contains('A few notes that explain how server-side rendering works in Next.js').should('be.visible')

    cy.get('p').contains('Isolating features into separate branches is a really common practice for most developers. By separating features & bug fixes you can avoid a lot of problems and keep your branches clean.').should('be.visible')

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
