
import { NextResponse } from 'next/server';
import db from '../../../config/db';

export async function GET() {
  try {
    // Testar a conexão com uma consulta simples
    const result = await db.query('SELECT NOW()');
    
    return NextResponse.json({ 
      status: 'success',
      message: 'Conexão com o banco de dados funcionando!',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    console.error('Erro ao testar o banco de dados:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Falha na conexão com o banco de dados',
        error: error.message
      },
      { status: 500 }
    );
  }
}
