Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('getById', (id: string) => {
  cy.get(`[id="${id}"]`);
});
