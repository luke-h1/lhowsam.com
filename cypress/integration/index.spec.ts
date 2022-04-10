describe('index', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render correctly', () => {
    cy.get('h1').contains("Hey, I'm Luke").should('be.visible')
  })

  it('should display projects', () => {
    for (let i = 0; i < 3; i+= 1) {
      cy.getByTestId('project-title').eq(i).should('not.be.empty')
      cy.getByTestId('project-intro').eq(i).should('not.be.empty')
      cy.getByTestId('project-github').eq(i).should('be.visible')
    }
  })
});
