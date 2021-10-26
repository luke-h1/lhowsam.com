// eslint-disable-next-line no-unused-vars
// @ts-ignore
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<Element>;
    getById(id: string): Chainable<Element>;
  }
}
