import express from 'express';
import {listarcategoriasJJM, crearCategoriaJJM, editarCategoriaJJM, buscarCategoriaJJM, eliminarCategoriaJJM} from "../controllers/categoriaController_JJM.js"

const router = express.Router();
router.get("/categoriasJJM", listarcategoriasJJM);
router.post("/categoriasJJM", crearCategoriaJJM);
router.get("/categoriasJJM/:id_categoria", buscarCategoriaJJM);
router.put("/categoriasJJM/:id_categoria", editarCategoriaJJM);
router.delete("/categoriasJJM/:id_categoria", eliminarCategoriaJJM);
export default router;
