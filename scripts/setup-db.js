
const { initializeDatabase } = require('../src/utils/initDb');

// Configurar o banco de dados
async function setupDatabase() {
  console.log('Iniciando configuração do banco de dados...');
  await initializeDatabase();
  console.log('Configuração do banco de dados concluída!');
  process.exit(0);
}

setupDatabase().catch(err => {
  console.error('Erro na configuração do banco de dados:', err);
  process.exit(1);
});
