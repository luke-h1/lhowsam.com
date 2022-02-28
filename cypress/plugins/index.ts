// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>>;
    getById(id: string): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}
