describe('Formulario de Login', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })

    it('Não deve permitir um email inválido', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('alinedamasceno0810@gmail')
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O email digitado é inválido')
    })

    it('Não deve permitir campo email em branco', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })

    it('Não deve permitir campo senha em branco', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('alinedamasceno0810@gmail')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
    })
})
