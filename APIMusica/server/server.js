import express from 'express'
import cancionrts from './routes/cancion.route.js';
import playlistrts from './routes/playlist.route.js';

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Rutas
app.use('/api/',cancionrts);
app.use('/api/',playlistrts);

// Listener
app.listen(port,()=>{
    console.log(`Sí corre :) ${port}`);
})

