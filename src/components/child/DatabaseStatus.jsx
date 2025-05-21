
"use client";
import { useState, useEffect } from 'react';

const DatabaseStatus = () => {
  const [status, setStatus] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    const checkDbConnection = async () => {
      try {
        const response = await fetch('/api/db-test');
        const data = await response.json();
        
        setStatus({
          loading: false,
          data,
          error: null
        });
      } catch (error) {
        setStatus({
          loading: false,
          data: null,
          error: error.message || 'Erro ao conectar com o banco de dados'
        });
      }
    };

    checkDbConnection();
  }, []);

  return (
    <div className="card p-24">
      <div className="card-header py-16 px-24">
        <h6 className="text-lg fw-semibold mb-0">Status da Conexão com o Banco de Dados</h6>
      </div>
      <div className="card-body p-24">
        {status.loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : status.error ? (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Erro de Conexão!</h4>
            <p>{status.error}</p>
          </div>
        ) : (
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">{status.data.message}</h4>
            <p>Timestamp do servidor: {status.data.timestamp}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseStatus;
