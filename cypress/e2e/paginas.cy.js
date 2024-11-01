describe('Testando múltiplas páginas', ()=>{
    it('Deve conseguir acessar a página de cartões', ()=>{
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('alinedamasceno0810@gmail.com')
        cy.getByData('senha-input').type('Senha123')
        cy.getByData('botao-enviar').click()

        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })
})