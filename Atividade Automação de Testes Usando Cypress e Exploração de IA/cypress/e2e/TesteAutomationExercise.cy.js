describe('Teste Automatizado AutomationExercise', () => {
  it('Acessando site e buscando por t-shirt', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')
    cy.get('input[id="search_product"]').type('T-shirt')
    cy.get('button[id="submit_search"]').click()
    cy.get('a[href="/product_details/28"]').click()
    cy.url().should('include','/product_details/28')
    cy.get('button[type="button"]').click()
    cy.get('a[href="/view_cart"]').eq(1).click()
    cy.url().should('include','/view_cart')
    cy.contains('Proceed To Checkout').click()
  })
  it('Tentando fazer login com E-mail invalido', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/login"]').click()
    cy.url().should('include','/login')
    cy.get('input[data-qa="login-email"]').type("teste@teste.com")
    cy.get('input[data-qa="login-password"]').type("@teste123")
    cy.get('button[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})