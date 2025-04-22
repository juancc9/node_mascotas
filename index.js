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

  import  listarcategoriasJJM  from "./routes/categoriaRoute_JJM.js";

  app.use(listarcategoriasJJM)

app.use(router)
app.listen(3000,()=>{
    console.log("servidor inicializado en el pto 3000")
});
