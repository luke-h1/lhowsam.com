describe('dark/light mode', () => {

  it('loads the page in dark mode by default if localstorage `theme` has key: `dark`', () => {
    cy.visit('/');
    localStorage.setItem('theme', 'dark');
    cy.get('[data-theme="dark"]').should('exist');
  });

  it('switches to light mode', () => {
    cy.visit('/');
    localStorage.setItem('theme', 'dark');
    cy.get('[data-theme="dark"]').should('exist');

    cy.getByTestId('light-mode').click();
    cy.get('[data-theme="light"]').should('exist');
  });


  it('switches to dark mode', () => {
    cy.visit('/')
    localStorage.setItem('theme', 'light');
    cy.get('[data-theme="light"]').should('exist');
    cy.getByTestId('dark-mode').click();
    cy.get('[data-theme="dark"]').should('exist');
  })
})