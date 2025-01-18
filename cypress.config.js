const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://agenda-contatos-react.vercel.app/', // URL base da aplicação
    viewportWidth: 1280, // Largura da tela
    viewportHeight: 720, // Altura da tela
  },
});

