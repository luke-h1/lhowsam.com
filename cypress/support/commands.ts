Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-cy="${testId}"]`);
});

Cypress.Commands.add('getById', (id: string) => {
  cy.get(`[id="${id}"]`);
});
