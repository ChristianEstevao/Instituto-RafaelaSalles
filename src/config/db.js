
const { Pool } = require('pg');
require('dotenv').config();

// Usar pooling para melhor desempenho
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Testar a conexão
pool.on('connect', () => {
  console.log('Conexão com o banco de dados estabelecida com sucesso');
});

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getPool: () => pool,
};
