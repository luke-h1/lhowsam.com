Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-cy="${testId}"]`);
});

Cypress.Commands.add('getById', (id: string) => {
  return cy.get(`[id="${id}"]`);
});
