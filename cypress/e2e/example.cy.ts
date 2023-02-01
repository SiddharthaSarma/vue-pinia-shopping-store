// https://docs.cypress.io/api/introduction/api.html

describe('Pinia store', () => {
  it('initial state', () => {
    cy.visit('/');
    cy.getByTestId('heading').should('exist').should('have.text', 'Pinia Shopping cart');
  });
});
