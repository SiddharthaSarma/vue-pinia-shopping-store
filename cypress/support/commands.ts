/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      // login(email: string, password: string): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
      getByTestId(selector: string): Chainable<JQuery<HTMLElement>>;
      getByTestClass(selector: string): Chainable<JQuery<HTMLElement>>;
      addItemsToCart(): void;
    }
  }
}
Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-test-id=${selector}]`, ...args);
});

Cypress.Commands.add('getByTestClass', (selector, ...args) => {
  return cy.get(`[data-test-class=${selector}]`, ...args);
});

Cypress.Commands.add('addItemsToCart', () => {
  cy.get('@productContainerList').each(($el) => {
    cy.wrap($el.find('[data-test-id=plusOperator]')).click().click();
    cy.wrap($el.find('[data-test-id=addToCartBtn]')).click();
  });
});
export {};
