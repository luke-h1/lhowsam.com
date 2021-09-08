describe('blog page should work', () => {
  before(() => { 
    cy.visit('/blog')
    cy.contains('Blog').should('be.visible')

  })
  it('blog text should be visible', () => {
    cy.contains('Lessons learned, thoughts on various tech & articles on what I\'m building').should('be.visible')
  });

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
