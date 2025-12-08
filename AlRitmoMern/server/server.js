import express from 'express'
import dotenv from 'dotenv'
import tcdb from './config/database.js'
import cancionrts from './routes/cancion.route.js'
import playlistrts from './routes/playlist.route.js'
import cors from 'cors'

dotenv.config()

const app =  express()
const port  =process.env.PORT ;


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors())

tcdb();
//routes

app.use('/api/cancion/',cancionrts)
app.use('/api/playlist/',playlistrts)






app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})