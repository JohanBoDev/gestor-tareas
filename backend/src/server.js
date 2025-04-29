import dotenv from 'dotenv'
import app from'./app.js'
import pool from './db/db.js'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})