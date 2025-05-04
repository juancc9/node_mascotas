import bodyParser from "body-parser";
import express from "express";
import cors from 'cors'; 
const router = express.Router(); 

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({    
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }));

// DOCUMENTACION

app.set('view engine', 'ejs');
app.get('/doc', (req, res) => {
    res.render('documentacion.ejs'); 
  });

    // Autenticacion
    import authRouter from "./routes/autenticacionRoute_JJM.js"
    // Categorias
    import categoriaRouter from "./routes/categoriaRoute_JJM.js";  
    // Razas
    import razaRouter from "./routes/razaRoute_JJM.js"
    // Generos
    import generoRouter from "./routes/generoRoute_JJM.js"
    // usuarios
    import usuariosRouter from "./routes/usuariosRoute_JJM.js"
    // Mascotas
    import mascotasRouter from "./routes/mascotaRoute_JJM.js"

    app.use("/api",authRouter)
    app.use("/api", categoriaRouter);  
    app.use("/api", razaRouter);
    app.use("/api",generoRouter);
    app.use("/api",usuariosRouter)
    app.use("/api", mascotasRouter);


    

app.use(router)
app.listen(3000,()=>{
    console.log("servidor inicializado en el pto 3000")
});
