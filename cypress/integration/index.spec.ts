describe('index', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render correctly', () => {
    cy.get('span').contains('Hey 👋 ').should('be.visible')
    cy.contains('I\'m Luke')
  })

  it('should display recent blogs', () => {
    for (let i = 0; i < 3; i+= 1) {
      cy.get('article').eq(i).find('img').should('be.visible')
      cy.get('article').eq(i).find('h3').should('be.visible').and('not.be.empty')
      cy.get('article').eq(i).find('small').should('be.visible').and('not.be.empty')

    }
  })

  it('should display projects', () => {
    for (let i = 0; i < 3; i+= 1) {
      cy.getByTestId('project-title').eq(i).should('not.be.empty')
      cy.getByTestId('project-intro').eq(i).should('not.be.empty')
      cy.getByTestId('github-url').eq(i).should('be.visible')
    }
  })
});
