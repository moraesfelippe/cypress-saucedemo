describe('Produtos - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('CT004 - Listar produtos com sucesso', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('CT005 - Ordenar produtos por menor preço', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').first().should('contain', '7.99')
  })

  it('CT006 - Visualizar detalhes do produto', () => {
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
  })

})