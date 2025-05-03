import express from 'express';
import {listarCategoriaJJM, crearCategoriaJJM, editarCategoriaJJM, buscarCategoriaJJM, eliminarCategoriaJJM} from "../controllers/categoriaController_JJM.js"
import { validarToken } from '../controllers/autenticacionController_JJM.js';
const router = express.Router();
router.get("/categoriasJJM" , validarToken, listarCategoriaJJM);
router.post("/categoriasJJM", crearCategoriaJJM);
router.get("/categoriasJJM/:id_categoria", buscarCategoriaJJM);
router.put("/categoriasJJM/:id_categoria", editarCategoriaJJM);
router.delete("/categoriasJJM/:id_categoria", eliminarCategoriaJJM);
export default router;
