describe('Testes para a Agenda de Contatos', () => {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app/'))

    it('Deve adicionar um usuário à lista', () => {
        const dados = {
            nome: 'Igor Cesar',
            email: 'igormtba@gmail.com',
            telefone: '41 987243560'
        }

        cy.get('input[placeholder="Nome"]').type(dados.nome)
        cy.wait(1000) // Aguarda 1 segundo antes de preencher o próximo campo
        cy.get('input[placeholder="E-mail"]').type(dados.email)
        cy.wait(1000)
        cy.get('input[placeholder="Telefone"]').type(dados.telefone)
        cy.wait(1000)
        cy.get('button.adicionar').click()
        cy.wait(2000) // Espera 2 segundos para garantir que a ação seja processada
    })

    it('Deve editar um contato existente', () => {
        const novosDados = {
            nome: 'Igor C. Silva',
            email: 'igor.silva@gmail.com',
            telefone: '41 999887766'
        }

        // Localizando o contato na lista e clicando no botão de edição
        cy.get('button.edit').first().click()
        cy.wait(1000)

        // Editando os campos
        cy.get('input[placeholder="Nome"]').clear().type(novosDados.nome)
        cy.wait(1000)
        cy.get('input[placeholder="E-mail"]').clear().type(novosDados.email)
        cy.wait(1000)
        cy.get('input[placeholder="Telefone"]').clear().type(novosDados.telefone)
        cy.wait(2000)

        // Salvando as alterações
        cy.get('button.alterar').click()
        cy.wait(2000)
    })

    it('Deve deletar um usuário da lista', () => {
        cy.get('button.delete').first().click()
        cy.wait(2000) // Aguarda para garantir que o contato seja removido
    })
})


