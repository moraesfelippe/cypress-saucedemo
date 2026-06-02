describe('Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('CT001 - Login com sucesso', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
  })

  it('CT002 - Login com senha incorreta', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha_errada')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('CT003 - Login com campos vazios', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

})