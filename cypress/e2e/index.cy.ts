describe('index', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render correctly', () => {
    cy.get('span').contains("I'm a Software Engineer").should('be.visible')
  })

  it('should display posts', () => {
    for (let i = 0; i < 3; i += 1) {
      cy.getByTestId('post-title').eq(i).should('not.be.empty').and('be.visible');
      cy.getByTestId('post-intro').eq(i).should('not.be.empty').and('be.visible');
      cy.getByTestId('post-tags').eq(i).should('not.be.empty').and('be.visible');
    }
  })
});

