Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('getById', (id: string) => {
  return cy.get(`[id="${id}"]`);
});
