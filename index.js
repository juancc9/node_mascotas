import bodyParser from "body-parser";
import express from "express";
const router = express.Router(); 

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DOCUMENTACION

app.set('view engine', 'ejs');
app.get('/doc', (req, res) => {
    res.render('documentacion.ejs'); 
  });

    // Categorias
    import categoriaRouter from "./routes/categoriaRoute_JJM.js";  // Importamos el router

    app.use("/api", categoriaRouter);  // Las rutas de categorías estarán bajo "/api"
  

app.use(router)
app.listen(3000,()=>{
    console.log("servidor inicializado en el pto 3000")
});
