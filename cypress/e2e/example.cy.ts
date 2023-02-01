// https://docs.cypress.io/api/introduction/api.html
import products from '../../src/data/products.json';
describe('Pinia store', () => {
  it('initial state', () => {
    cy.visit('/');
    cy.getByTestId('heading')
      .should('exist')
      .should('have.text', 'Pinia Shopping cart');
    cy.getByTestId('cartCount').should('have.text', '0');
    cy.getByTestClass('product-container').as('productContainerList');
    cy.get('@productContainerList').should('have.length', 6);
    cy.get('@productContainerList')
      .find('[data-test-class=item-count-input]')
      .then(($el) => Cypress._.map($el, 'value'))
      .should('deep.equal', ['0', '0', '0', '0', '0', '0']);
    const prices = products.map((item) => `$${item.price}`);
    cy.getByTestClass('product-price')
      .should('have.length', 6)
      .then(($el: any) => {
        return Cypress._.map($el, 'innerText');
      })
      .should('deep.equal', prices);
  });
});
