// https://docs.cypress.io/api/introduction/api.html
import products from '../../src/data/products.json';
describe('Pinia store', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getByTestClass('product-container').as('productContainerList');
  });
  it('initial state', () => {
    cy.getByTestId('heading')
      .should('exist')
      .should('have.text', 'Pinia Shopping cart');
    cy.getByTestId('cartCount').should('have.text', '0');
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

  it('should add the items to the cart', () => {
    cy.get('@productContainerList').each(($el) => {
      cy.wrap($el.find('[data-test-id=plusOperator]')).click().click();
      cy.wrap($el.find('[data-test-class=item-count-input]')).should(
        'have.value',
        2
      );
      cy.wrap($el.find('[data-test-id=addToCartBtn]')).click();
    });
    // cy.get('@productContainerList').first().find('[data-test-id=plusOperator]').click().click();
    // cy.get('@productContainerList').first().find('[data-test-id=addToCartBtn]').click();
    // cy.getByTestId('cartCount').should('have.text', '2');
    // cy.get('@productContainerList').eq(1).find('[data-test-id=plusOperator]').click().click();
    // cy.get('@productContainerList').eq(1).find('[data-test-id=addToCartBtn]').click();
    cy.get('@productContainerList')
      .find('[data-test-class=item-count-input]')
      .then(($el) => Cypress._.map($el, 'value'))
      .should('deep.equal', ['0', '0', '0', '0', '0', '0']);
    cy.getByTestId('cartCount').should('have.text', '12');
  });
});
