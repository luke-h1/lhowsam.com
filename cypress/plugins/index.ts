
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
};
declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<Element>;
    getById(id: string): Chainable<Element>;
  }
}
