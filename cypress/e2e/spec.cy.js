describe('Cleber', () => {

  it('passes', () => {
    cy.visit('http://localhost:5500/formulario.html')

    //cy.get('#nome').type("")

    cy.contains("Cadastro de DEVs").should('be.visible')

    cy.url()
      .should('be.eq','http://localhost:5500/formulario.html')

    cy.get('#sobrenome').type("Guardião")

    cy.get('#email').type("cleberomonstro@gmail.com")

    cy.contains('Fullstack').click()

    cy.get('#senioridade').select('Júnior')

    cy.contains('C#').click()

    cy.get('[for="tecnologia3"]').click()

    cy.get('#experiencia').type("Jonas Brothers")

    cy.get('.botao').click()
  })
})