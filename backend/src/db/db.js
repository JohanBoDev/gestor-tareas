import pgk from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pgk

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
})

pool.on('connect', ()=> {
console.log("🟢Conectado a postgreSQL")
})

export default pool;