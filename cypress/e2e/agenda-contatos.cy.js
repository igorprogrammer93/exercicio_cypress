describe('Testes na Agenda de Contatos', () => {
    beforeEach(() => {
      cy.visit('/'); // Acessa a aplicação
    });
  
    it('Deve adicionar um contato', () => {
      cy.get('input[placeholder="Nome"]').type('Teste Cypress');
      cy.get('input[placeholder="E-mail"]').type('teste.cypress@example.com');
      cy.get('input[placeholder="Telefone"]').type('1234567890');
      cy.contains('ADICIONAR').click();
  
      cy.contains('Teste Cypress').should('exist');
      cy.contains('teste.cypress@example.com').should('exist');
      cy.contains('1234567890').should('exist');
    });
  
    it('Deve editar um contato existente', () => {
      cy.contains('Teste Cypress')
        .parent()
        .contains('EDITAR')
        .click();
  
      cy.get('input[placeholder="Nome"]').clear().type('Teste Editado');
      cy.get('input[placeholder="E-mail"]').clear().type('editado@example.com');
      cy.get('input[placeholder="Telefone"]').clear().type('9876543210');
      cy.contains('ADICIONAR').click();
  
      cy.contains('Teste Editado').should('exist');
      cy.contains('editado@example.com').should('exist');
      cy.contains('9876543210').should('exist');
    });
  
    it('Deve deletar um contato', () => {
      cy.contains('Teste Editado')
        .parent()
        .contains('DELETAR')
        .click();
  
      cy.contains('Teste Editado').should('not.exist');
      cy.contains('editado@example.com').should('not.exist');
      cy.contains('9876543210').should('not.exist');
    });
  });
  