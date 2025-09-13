require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    console.log('Testing connection with:');
    console.log('Host:', process.env.DB_HOST || 'localhost');
    console.log('User:', process.env.DB_USER || 'root');
    console.log('Password:', process.env.DB_PASSWORD ? '***' : 'NO PASSWORD SET');
    console.log('Port:', process.env.DB_PORT || '3306');
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      port: parseInt(process.env.DB_PORT || '3306'),
    });
    
    console.log('✅ MySQL database connected successfully');
    await connection.end();
    return true;
  } catch (error) {
    console.error('❌ MySQL database connection failed:', error.message);
    return false;
  }
}

testConnection();
