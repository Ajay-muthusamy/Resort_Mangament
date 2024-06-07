import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Hotel_Management",
    password: "1234",
    port: 5000,
  });
export default pool;