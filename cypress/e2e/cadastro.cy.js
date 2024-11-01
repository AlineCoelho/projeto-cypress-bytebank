describe('cadastro', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })

    it('Cadastro valido', ()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Aline Coelho')
        cy.getByData('email-input').type('alinedamasceno0810@gmail.com')
        cy.getByData('senha-input').type('Senha123')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
    })

})